import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  isRegister: boolean = false;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  Register(user: User): Observable<User> {
    return this.httpClient.post<User>(
      `${environment.APIURL}/users`,
      user,
      this.httpOptions
    );
  }

  getUserByEmail(email: any): Observable<any> {
    return this.httpClient.get(`${environment.APIURL}/users?email=${email}`);
  }

  getUser(): Observable<any> {
    return this.httpClient.get(`${environment.APIURL}/users`);
  }
}
