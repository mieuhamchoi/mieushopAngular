import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product/product';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  private productId:number | null = null;
  public product = {};

  constructor(public productService: ProductService,public commonService: CommonService, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('productId'));

    this.productService.getProductByid(this.productId).subscribe(data => {
      let product:Product = data;
       this.product = product;
        console.log('data', this.product)
    })
  }
}
