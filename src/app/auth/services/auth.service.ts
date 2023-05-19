import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { IUser } from '../store/interfaces';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }

  public login(user: IUser): Observable<IUser | any> {
    return this.http.post(`${environment.baseUrl}/auth/login`, user)
  }

  public create(user: IUser): Observable<IUser | any> {
    user.returnSecureToken = true
    return this.http.post(`${environment.baseUrl}/auth/signup`, user)
  }
}
