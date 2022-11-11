import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private httpClient: HttpClient) {}

  getAll(userToken: any): Observable<any> {
    return this.httpClient
      .get<any>(`${environment.APIURL}/api/users/orders/${userToken}`)
      .pipe(
        retry(3),
        catchError((err) => {
          throw new Error(err);
        })
      );
  }
}
