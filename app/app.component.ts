import { Component, OnInit } from '@angular/core';
import { CartService } from './cart-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Autumn_Food_Order';
  public totalItem:number=0;
  constructor(private cs:CartService){}
ngOnInit(): void {
  this.cs.getProdutc()
  .subscribe(res=>{
      this.totalItem=res.length;
  })
}
}