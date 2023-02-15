import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalog } from '../../interfaces/catalog/catalog';
import { Product } from '../../interfaces/product/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private targetPointCatalogs = 'http://localhost:3000/catalogs';
  private targetPointProducts = 'http://localhost:3000/products';
  private targetPointProductByCatalogId = 'http://localhost:3000/products?catalogId=';
  private targetPointProductById = 'http://localhost:3000/products?id=';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  public getCatalog():Observable<Catalog[]> {
    return this.httpClient.get<Catalog[]>(this.targetPointCatalogs, this.httpOptions)
  }

  public getProductListByCatalogId(catalogId: number):Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.targetPointProductByCatalogId + catalogId, this.httpOptions)
  }

  public getProductList():Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.targetPointProducts, this.httpOptions)
  }

  public getProductByid(productId: number):Observable<Product> {
    return this.httpClient.get<Product>(this.targetPointProductById + productId, this.httpOptions)
  }
}
