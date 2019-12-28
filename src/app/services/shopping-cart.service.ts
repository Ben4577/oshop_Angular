import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/ShoppingCart';
import { Product } from '../models/Products';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

shoppingCart: ShoppingCart;


  constructor(private http: HttpClient) { 
  }


/* Comment all code - shift alt A */

getOrCreateCart() {
  if(!this.shoppingCart)
  {
    this.shoppingCart = new ShoppingCart;
  }
}

 getTotalCartQuantity() : Observable<ShoppingCart> {
    return new  Observable<ShoppingCart>(obs => { this.shoppingCart});
}
 


getProductFromCart(productId) {
  let product: Product = this.shoppingCart.products.find(x => x.id === productId);
  return product;
}


getItemQuantity(productId) {
  let product: Product = this.shoppingCart.products.find(x => x.id === productId);
  if(product)
  {
  return product.quantity;
  }
  else
  {
    return 0;
  }
}


addProductToCart(product: Product){

  let productFound = this.shoppingCart.products.find(x => x.id === product.id);
  if(!productFound)
  {

    if(!product.quantity)
    {
    product.quantity = 1
    }
    else
    {
      product.quantity += 1
    }

  this.shoppingCart.products.push(product);
  }
  else{
      product.quantity += 1
    }


this.shoppingCart.totalQuantity += 1;
console.log(this.shoppingCart);
}



removeProductFromCart(productId) {
  let product: Product = this.shoppingCart.products.find(x => x.id === productId);

  if(product)
  {
    product.quantity -=1;

  if(product.quantity == 0)
  {
    this.shoppingCart.products.splice(this.shoppingCart.products.indexOf(product),1);
  }

  this.shoppingCart.totalQuantity -= 1;
  }

  console.log(this.shoppingCart);

}


removeAllProductsFromCart() {
  this.shoppingCart.products = [];
  this.shoppingCart.totalQuantity = 0;
}


}


