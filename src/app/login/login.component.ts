import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { User } from '../models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user:User = null;
resd: boolean = false;

  constructor(private loginService: LoginService) {  
   }

  ngOnInit() {
  }


  public logIn() {
    this.loginService.setUser();

  }



  public logOut() {
    this.user = null;
  }

}
