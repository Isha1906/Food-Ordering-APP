import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private baseurl="http://localhost:8081/admin/login";
  login: any;
  constructor(private httpClient:HttpClient) { }
  loginAdmin(user:Admin):Observable<object>
  {
    console.log(user);
    return this.httpClient.post(`${this.baseurl}`,user);
  }
}
