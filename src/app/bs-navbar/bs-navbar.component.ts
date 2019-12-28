import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { LoginService } from '../services/login.service'
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ConsoleReporter } from 'jasmine';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit{

loginService: LoginService;
user: User;
shoppingCartItemCount: Number = 0;


ngOnInit() {

  let cart$ =  this.shoppingCart.getTotalCartQuantity();

  cart$.subscribe ( result =>
    {
    this.shoppingCartItemCount = 0;
    this.shoppingCartItemCount = result.totalQuantity;
    }
   ); 

};



constructor(loginService: LoginService, 
  private shoppingCart :  ShoppingCartService) { 

  

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
