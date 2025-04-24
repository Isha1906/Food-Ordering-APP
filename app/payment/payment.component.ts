import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-service.service';
import { Router } from '@angular/router';
import { info } from 'console';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{

  public cartItemDetails: any=[];
  public grandTotal!:number;
  error="";
constructor(private cs: CartService, private rout:Router) {}
  ngOnInit(): void {
    this.cs.getProdutc()
   .subscribe(res=>{
    this.cartItemDetails = res;
    this.grandTotal=this.cs.getTotalPrice();
   })
  }
  msgAlert(){
    
      alert("Your Order Has Been Confirmed \t Click Ok and You Will Be Redirected to the Home Page");
      // this.error="Your Oder Has Been Confirmed and will be at your doorstep soon";
      setTimeout(() => this.rout.navigate(['/home']), 2000);

    
  }

}
