// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// // import{} from'@angular/core'
// @Injectable({
//   providedIn: 'root',
// })
// export class ApiService {
//   isLogged = false;
//   httpHeader = new HttpHeaders({
//     'Content-Type': 'application/json',
//     accessToken: '',
//   });

//   constructor(private htppClient: HttpClient) {}

//   getAll(route: any): Observable<any> {
//     return this.htppClient.get(`${environment.APIURL}/api/users`);
//   }
//   getOne(route: any, param: any): Observable<any> {
//     return this.htppClient.get(`${environment.APIURL}/api${route}/${param}`);
//   }
//   post(route: any, body: any): Observable<any> {
//     return this.htppClient.post(environment.APIURL + '/api' + route, body);
//   }
//   patch(route: any, param: any, body: any): Observable<any> {
//     return this.htppClient.patch(
//       environment.APIURL + '/api' + route + param,
//       body
//     );
//   }
// }
