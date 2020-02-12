import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { User } from '../models/user'
import { LoginModel } from '../models/LoginModel';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

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


  constructor(private loginService: LoginService,
    private router: Router
    ) {  
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
      window.sessionStorage.setItem('token', JSON.stringify(result.token));
      this.loginService.getUserLoginStatus.next(result.fullName);  
      this.loginErrorMessage = "";
      this.router.navigate(['']);
      }
      ,
    () => {this.loginErrorMessage = "Error: Unable to Log you in.";
     this.showUserLoggedIn = "";
    }
    );
  }

  public logOut() {
    this.loginService.logOut().subscribe(
      result => {
        if(result)
        {
          this.loginService.getUserLoginStatus.next("");
        }
      });
  }

  
}



