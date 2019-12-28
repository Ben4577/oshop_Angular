import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Products';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{

cartItemCount: number;

@Input('product') product: Product;
@Input('show-actions') showActions = true;
@Input('shopping-cart') shoppingCart;

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
