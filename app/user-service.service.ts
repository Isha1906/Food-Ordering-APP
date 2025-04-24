import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  
  getUserList():Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8081/user/all")
    .pipe(map((res:any)=>
    {
      return res;
    }))
  }

}
