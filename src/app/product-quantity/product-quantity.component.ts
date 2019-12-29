import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Products';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {

  cartItemCount: number;

  @Input('product') product: Product;
 
  constructor(private cartService : ShoppingCartService) { }
  
  addToCart(){
  this.cartService.addProductToCart(this.product);
  };
  
  removeFromCart() {
    this.cartService.removeProductFromCart(this.product.id);
  }
  
  getQuantity() {
    let itemQuantity = this.cartService.getItemQuantity(this.product.id);
    return itemQuantity ? itemQuantity : 0;
  }

 
}
