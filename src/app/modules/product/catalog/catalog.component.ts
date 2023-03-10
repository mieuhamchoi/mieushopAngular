import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product/product';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  private catalogId:number | null = null;
  public productList:Product[] = [];
  public startPage: number = 1;
  public maxItem: number = 5;
  public totalPages: number = 0;
  
  constructor(public productService: ProductService,public commonService: CommonService, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.catalogId = Number(this.route.snapshot.paramMap.get('catalogId'));
    this.commonService.setIndexMenu(this.catalogId);
    this.productService.getProductListByCatalogId(this.catalogId, this.startPage, this.maxItem).subscribe(data => {
      console.log("data 55", data)
      if (data.statusCode != 200) {
        alert("Connect database failed")
        return
      }
      this.productList = data.data.items;
      this.totalPages = data.data.meta.totalPages;
      this.startPage = data.data.meta.currentPage;
    })
  }
}
