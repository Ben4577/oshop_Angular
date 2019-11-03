import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { LoginService } from '../services/login.service'


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

loginService: LoginService;
user: User;

constructor(loginService: LoginService) { 


  this.user = {
    displayName: "ben kellington",
    password: "password"
  }

//loginService.getUser().subscribe (result =>
 // {this.user = result}
  //);

//loginService.getLoggedInUser.subscribe(result => 
//  {this.user = result
 //   console.log(this.user);
 // });

  //console.log(this.user);
}




//logout() {
//  this.user = null;
//}




}
