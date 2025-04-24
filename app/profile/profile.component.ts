import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile-service.service';
import { User } from '../user';
import { response } from 'express';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(){ }
  ngOnInit():void
  {
    
  }  
}

