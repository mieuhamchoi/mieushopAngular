import { Component } from '@angular/core';
import { Catalog } from 'src/app/shared/interfaces/catalog/catalog';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public catalogList: Catalog[] = [];

  constructor(private productService: ProductService, public commonService: CommonService) {}

  public ngOnInit():void {
    // get catalog list use product services
    this.productService.getCatalog().subscribe(data => {
      this.catalogList = data;
    })
  }
}
