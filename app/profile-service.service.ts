import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  private baseurl="http://localhost:4200/home";
  constructor(private http:HttpClient) { }
  
  getUser(){
    return this.http.get<any>("http://localhost:8081/user/userDetails")
    .pipe(map((res:any)=>
    {
      return res;
    }))
}
}