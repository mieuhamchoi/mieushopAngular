import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalog } from '../../interfaces/catalog/catalog';
import { Product } from '../../interfaces/product/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private targetPoint = 'http://localhost:3000/';
  private targetPointProductById = 'http://localhost:3000/products?id=';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  public getCatalog():Observable<any> {
    return this.httpClient.get<any>(this.targetPoint + 'catalogs', this.httpOptions)
  }

  public getProductListByCatalogId(catalogId: number, startPage:number, maxItem:number):Observable<any> {
    let params = { catalogid: catalogId, page: startPage, limit: maxItem };
    let headers = new HttpHeaders({
      'Content-type': 'application/json'
    })
    let httpOptions = {
      params,
      headers
    }
    return this.httpClient.get<any>(this.targetPoint + 'products', httpOptions)
  }

  public searchProduct(search: string, startPage:number, maxItem:number):Observable<any> {
    let params = { search: search, page: startPage, limit: maxItem };
    let headers = new HttpHeaders({
      'Content-type': 'application/json'
    })
    let httpOptions = {
      params,
      headers
    }
    return this.httpClient.get<any>(this.targetPoint + 'products', httpOptions)
  }

  public getProductList():Observable<any> {
    return this.httpClient.get<any>(this.targetPoint + 'products', this.httpOptions)
  }

  public getProductByid(productId: number):Observable<Product> {
    return this.httpClient.get<Product>(this.targetPointProductById + productId, this.httpOptions)
  }
}
