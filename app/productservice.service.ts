import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  // addP: any;
  constructor(private httpClient:HttpClient) { }
  addProduct(product:Product):Observable<any>
  {
    console.log(product);
    return this.httpClient.post(`http://localhost:8081/product/add`,product);  
  }
}
