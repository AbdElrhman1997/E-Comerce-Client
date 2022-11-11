import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartProduct } from '../Models/cart-product';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  };
  constructor(private httpClient: HttpClient) {}

  // addProducts(cartProducts:any):Observable<any>{
  //   return this.httpClient.post<any>(`${environment.APIURL}/Invoices`,cartProducts,this.httpOptions)
  // }
  addProducts(userToken: any, cartProducts: any): Observable<any> {
    return this.httpClient.patch<any>(
      `${environment.APIURL}/api/users/${userToken}`,
      cartProducts,
      this.httpOptions
    );
  }
}
