import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged = false;
  httpHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    accessToken: '',
  });

  constructor(private htppClient: HttpClient) {
    if ('accessToken' in localStorage) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  getAll(route: any): Observable<any> {
    return this.htppClient.get(`${environment.APIURL}/api/users`);
  }
  getOne(route: any, param: any): Observable<any> {
    return this.htppClient.get(`${environment.APIURL}/api${route}/${param}`);
  }
  post(route: any, body: any): Observable<any> {
    return this.htppClient.post(environment.APIURL + '/api' + route, body);
  }
  patch(route: any, param: any, body: any): Observable<any> {
    return this.htppClient.patch(
      environment.APIURL + '/api' + route + param,
      body
    );
  }
}
