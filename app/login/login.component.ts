import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../login-service.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  user:User=new User();
  error= "";
  error1="";
  success='';
  constructor(private lus:LoginUserService,private rout:Router){ }
  ngOnInit(){

  }
  userLogin()
{
  console.log(this.user);
  this.lus.loginUser(this.user).subscribe(
    data=>{
      
      this.success="Login Successful";
      setTimeout(() => this.rout.navigate(['/home']), 2000);
    },
    error=>{
      
      this.error="--Login Failed--";
      this.error1="--Enter correct email id and password--";

    }
  );
}


}

  