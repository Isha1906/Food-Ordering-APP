import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

import { LoginUserService } from '../login-service.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{

  admin:Admin=new Admin();
  error= "";
  error1="";
  success='';
  
  constructor(private rout:Router, private as: AdminServiceService){ }
  ngOnInit(){

  }
  
  adminLogin()
{
  console.log(this.admin);
  this.as.loginAdmin(this.admin).subscribe(
    data=>{
      
      this.success="Login Successful";
      setTimeout(() => this.rout.navigate(['/adminpage']),2000);
    },
    error=>{
      
      this.error="--Login Failed--";
      this.error1="--Enter correct id and password--";

    }
  );
}
}
