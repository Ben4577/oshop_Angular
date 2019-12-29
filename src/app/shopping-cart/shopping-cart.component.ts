import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCart } from '../models/ShoppingCart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

cart$;
shoppingCart : ShoppingCart = null;
totalPrice: number = 0;

constructor(private shoppingCartService : ShoppingCartService) { }


ngOnInit() {

this.totalPrice = this.shoppingCartService.getCartValue();

 this.shoppingCartService.getTotalCartAmount.subscribe (
   result =>  {
     this.totalPrice = result;
   }
  ) 

  this.shoppingCartService.getCartItems().subscribe (
  result => 
  { 
    if(result)
    {
      this.shoppingCart = result;      
    }
    else
    {
      this.shoppingCart.totalQuantity = 0;
    } 
  }
)  

}

clearCart() {
  this.shoppingCartService.clearCart();
  this.totalPrice = this.shoppingCartService.getCartValue();
}

}
