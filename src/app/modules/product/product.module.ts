import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { FormatVndPipe } from 'src/app/shared/pipes/format-vnd.pipe';
import { MaxTextPipe } from 'src/app/shared/pipes/max-text.pipe';



@NgModule({
  declarations: [
    ProductComponent,
    CatalogComponent,
    ProductDetailComponent,
    FormatVndPipe,
    MaxTextPipe,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
