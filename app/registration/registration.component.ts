import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration-service.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  user:User=new User();
  error= "";
  error1="";
  success='';
  constructor(private reg:RegistrationService,private rout:Router){ }
  ngOnInit(){

  }
  userRegister()
{
  console.log(this.user);
  this.reg.regisUser(this.user).subscribe(
    data=>{
      
      this.success="Registration Successful";
      setTimeout(() => this.rout.navigate(['']), 2000);
    },
    error=>{
      
      this.error="--Registration Failed--";
      this.error1="--Because Email id is already regsiter--";

    }
  );
}

}
