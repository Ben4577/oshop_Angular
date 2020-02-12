import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCart } from '../models/ShoppingCart';
import { Subscription } from 'rxjs';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy{

shipping: number;
shoppingCart : ShoppingCart = null;
subscription: Subscription;
sub: Subscription;
user: User;
orderSaved;
showResult : string = "";


constructor(
  private shoppingCartService: ShoppingCartService,
  private orderService: OrderService,
  private router: Router
  ) { 
    this.user = new User();
  }


  ngOnInit() {
    this.subscription = this.shoppingCartService.getCartItems().subscribe (
      result =>  this.shoppingCart = result      
    ) 
  }


  placeOrder(user) {
    let order = {
      user: {
        name: user.name,
        address1: user.address1,
        address2: user.address2,
        city: user.city,
      },   
      datePlaced: new Date(),
      shipping: this.shipping,
      items:  this.shoppingCart.products.map(i => {
        return {
          productOrder: {
          title: i.title,
          price: i.price,
        },
        quantity: i.quantity,
        totalPrice: i.price * i.quantity
      }
      })
    };

    this.sub = this.orderService.storeOrder(order).subscribe(
      result =>
      {this.orderSaved = result;
      this.showResult = "Order Created";
      },
      error => this.showResult = "There has been an error saving the Order"
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.sub.unsubscribe();
  }
  
}


export class User{
  name: string;
  address1: string;
  address2: string;
  city: string;
}






