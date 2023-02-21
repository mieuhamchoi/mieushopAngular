import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product/product';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent {
  private search:string | null = "";
  public productList:Product[] = [];
  public startPage: number = 1;
  public maxItem: number = 2;
  public totalPages: number = 0;

  constructor(public productService: ProductService,public commonService: CommonService, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.search = this.route.snapshot.paramMap.get('search');

    this.productService.searchProduct(String(this.search), this.startPage, this.maxItem).subscribe(data => {
      console.log(data)
      if (data.statusCode != 200) {
        alert("Connect database failed")
        return
      }
      this.productList = data.data.items;
      this.totalPages = data.data.meta.totalPages;
      this.startPage = data.data.meta.currentPage;
    })
  }

  getNumbers(max: number): number[] {
    return Array.from({length: max}, (_, i) => i + 1);
  }

  getPage(type: string) {
    // first, last, next, previous
    
    if (type == "first") {
      if (this.search != null) {
        this.productService.searchProduct(this.search, 1, this.maxItem).subscribe(data => {
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

    if (type == "last") {
      if (this.search != null) {
        this.productService.searchProduct(this.search, this.totalPages, this.maxItem).subscribe(data => {
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

    if (type == "next") {
      console.log("đã vào next")
      if (this.startPage >= this.totalPages) {
        return
      }
      if (this.search != null) {
        this.productService.searchProduct(this.search, this.startPage + 1, this.maxItem).subscribe(data => {
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

    if (type == "previous") {
      if (this.startPage <= 1) {
        return
      }
      if (this.search != null) {
        this.productService.searchProduct(this.search, this.startPage - 1, this.maxItem).subscribe(data => {
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
  }
}
