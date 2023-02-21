import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductComponent } from './product.component';


const routes: Routes = [
    {
        path: '',
        component: ProductComponent,
        children: [
            {
                path: 'productlist/:search',
                component: ProductSearchComponent
            },
            {
                path: 'catalog/:catalogId',
                component: CatalogComponent
            },
            {
                path: ':productId',
                component: ProductDetailComponent
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }