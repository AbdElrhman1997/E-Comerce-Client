import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, retry, catchError } from 'rxjs';
import { Product } from 'src/app/Models/product';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Product> {
    return this.httpClient
      .get<Product>(`${environment.APIURL}/api/products`)
      .pipe(
        retry(3),
        catchError((err) => {
          throw new Error(err);
        })
      );
  }

  getPrdById(prdId: number): Observable<any> {
    return this.httpClient
      .get<any>(`${environment.APIURL}/api/products/product/${prdId}`)
      .pipe(
        retry(3),
        catchError((err) => {
          throw new Error(err);
        })
      );
  }

  getPrdByCat(cat: string): Observable<Product> {
    return this.httpClient
      .get<Product>(`${environment.APIURL}/api/products/${cat}`)
      .pipe(
        retry(3),
        catchError((err) => {
          throw new Error(err);
        })
      );
  }
}
