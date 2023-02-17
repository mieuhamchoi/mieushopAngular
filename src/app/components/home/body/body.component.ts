import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { Catalog } from 'src/app/shared/interfaces/catalog/catalog';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { Product } from 'src/app/shared/interfaces/product/product';
interface pictureObj {
  title: string;
  link: string;
}


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  public pictureList: pictureObj[] = [];
  public catalogList: Catalog[] = [];
  public productList: Product[] = [];

  constructor(private productService: ProductService, public commonService: CommonService) {}

  public ngOnInit():void {
    let pictureList = [
      {
        title: 'ảnh 1',
        link: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-cool-new-mobile-phone-promotion-purple-banner-image_183067.jpg'
      },
      {
        title: 'ảnh 2',
        link: 'https://didongvang.com/files/assets/banner01.jpg'
      },
      {
        title: 'ảnh 3',
        link: 'https://cdn.tgdd.vn/hoi-dap/1355217/banner-tgdd-800x300.jpg'
      }
    ]
    this.pictureList = pictureList;

    // get catalog list use product services
    this.productService.getCatalog().subscribe(data => {
      if (data.statusCode != 200) {
        alert("Connect database failed")
        return
      }
      this.catalogList = data.data;
    })

     // get product list use product services
    this.productService.getProductList().subscribe(data => {
      if (data.statusCode != 200) {
        alert("Connect database failed")
        return
      }
      this.productList = data.data;
    })
  }

  public filterProductByCatalogId(catalogId: number):Product[] {
    let result: Product[] = [];
    if (catalogId != undefined) {
      for (let i in this.productList) {
        if (this.productList[i].catalogId == catalogId) {
          result.push(this.productList[i]);
        }
      }
    }
    return result
  }
}
