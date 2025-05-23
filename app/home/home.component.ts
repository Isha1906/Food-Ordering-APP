import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart-service.service';
import { HomeService } from '../home-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public totalItem:any;
  public proDetails: any;
  constructor(private http:HomeService,private cs:CartService){}
  ngOnInit(): void {
    this.cs.getProdutc()
  .subscribe(res=>{
      this.totalItem=res.length;
  })
    this.http.getProduct()
    .subscribe(res=>{
      this.proDetails=res;
      this.proDetails.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })  
  }
  

  atc(item:any){
    this.cs.addToCart(item);
  }
   
    




}