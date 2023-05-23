import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IProduct } from '../interfaces/products.interfaces';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _http: HttpClient) { }


  public getAllProducts(): Observable<IProduct[]> {
    const url = `${environment.baseUrl}/products`;
    return this._http.get<IProduct[]>(url);
  }

  public getProduct(id: number): Observable<IProduct> {
    const url = `${environment.baseUrl}/products/${id}`;
    return this._http.get<IProduct>(url);
  }

  public changeProductData(product: IProduct): Observable<IProduct> {
    const url = `${environment.baseUrl}/products/${product.id}`;
    return this._http.put<IProduct>(url, product);
  }

  public createProduct(product: IProduct): Observable<IProduct> {
    const url = `${environment.baseUrl}/products`;
    return this._http.post<IProduct>(url, product);
  }

  public deleteProduct(id: number): Observable<string> {
    const url = `${environment.baseUrl}/products/${id}`;
    return this._http.delete<string>(url);
  }
}
