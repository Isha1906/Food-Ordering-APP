import { Component } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { Product } from '../product';
import { HomeService } from '../home-service.service';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

  product:Product=new Product();
  userDetails!: User[];
  productDetails!: Product[];
  visible = [false, false];
  success='';

  toggleCollapse(id: number): void {
    this.visible[id] = !this.visible[id];
  }

  constructor(private cs: UserServiceService, private ps:HomeService, private pro:ProductserviceService) {}
  

  ngOnInit(): void {
   this.cs.getUserList().subscribe(data =>
    {
      this.userDetails=data;
    }
    );
    this.ps.getProduct().subscribe(data=>
    {
      this.productDetails=data;
    }
    );
 
   }

  addProduct()
  {
    console.log(this.product);
    this.pro.addProduct(this.product).subscribe(
      data=>{
        
        this.success="PRODUCT HAS BEEN ADDED SUCCESSFULLY";
        
      } 
    );
    
  }
  
}
