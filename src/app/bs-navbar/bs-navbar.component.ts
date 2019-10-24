import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { LoginService } from '../services/login.service'


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

user: User = null;

constructor(loginService: LoginService) { 
loginService.getUser().subscribe (result =>
    {this.user = result}
  );

  console.log(this.user);

}

logout() {
  this.user = null;
}


}
