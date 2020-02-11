import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/user'
import { LoginService } from '../services/login.service'
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCart } from '../models/ShoppingCart';
import { Subject } from 'rxjs';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit, OnDestroy{

loginService: LoginService;
user: User;
shoppingCartItemCount: Number = 0;
cart: ShoppingCart;
showUserLoggedIn : string = "";



ngOnInit() {

   this.shoppingCartService.getTotalCartQuantity.subscribe (
  result =>  this.shoppingCartItemCount = result
  ) 

 // this.loginService.getUserLoginStatus.subscribe (
 // result => this.showUserLoggedIn = result
//)

//this.loginService.getUserLoginStatus.next("");

};

ngOnDestroy(){
  this.shoppingCartService.getTotalCartQuantity.unsubscribe();
}

constructor(loginService: LoginService, 
  private shoppingCartService :  ShoppingCartService) { 

  
this.user = null;
   //{}
   // displayName: "ben kellington",
   // password: "password"
  //}


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
