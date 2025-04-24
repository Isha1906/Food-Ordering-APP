import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  //private baseurl="http://localhost:8081/user/addUser";
  register: any;
  constructor(private httpClient:HttpClient) { }
  regisUser(user:User):Observable<any>
  {
    const headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, Put, DELETE');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8081/user/addUser');
    console.log(user);
    return this.httpClient.post(`http://localhost:8081/user/addUser`,user);
  }
}