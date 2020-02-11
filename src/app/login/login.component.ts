import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { User } from '../models/user'
import { LoginModel } from '../models/LoginModel';
import { Subject } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user:User = null;
resd: boolean = false;
loginUser: LoginModel;
loginErrorMessage: string;
showUserLoggedIn : string = "";


  constructor(private loginService: LoginService) {  
    this.loginUser = new LoginModel();
    this.loginErrorMessage = "";
   }


  ngOnInit() {
    this.loginService.getUserLoginStatus.subscribe (
      result => this.showUserLoggedIn = result
    )  
  }

  public save(loginUser) {  
    this.loginService.setUser(loginUser).subscribe (
      result => 
      {  
      console.log(result.fullName);   
      this.loginService.getUserLoginStatus.next(result.fullName);  
      this.loginErrorMessage = "";
      }
      ,
    () => {this.loginErrorMessage = "Error: Unable to Log you in.";
     this.showUserLoggedIn = "";
    }
    );
  }


  public logOut() {
    this.user = null;
  }

}



