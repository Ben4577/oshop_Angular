import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
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

getCart : Subject<ShoppingCart> = new Subject();

getCartItems() : Observable<ShoppingCart> {
  if(!this.shoppingCart)
  {
    this.shoppingCart = new ShoppingCart;
    this.shoppingCart.totalQuantity = 0; 
  }
  return of(this.shoppingCart); 
} 


getTotalCartQuantity : Subject<number> = new Subject();


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
  product.quantity = 1;
  this.shoppingCart.products.push(product);
  }
  else{
    console.log('p id: ' + product.id);
      productFound.quantity += 1;
  }

this.shoppingCart.totalQuantity += 1;
this.getTotalCartQuantity.next(this.shoppingCart.totalQuantity);

console.log(this.shoppingCart);
}



removeProductFromCart(productId) {
  let productFound: Product = this.shoppingCart.products.find(x => x.id === productId);

  if(productFound)
  {
    productFound.quantity -=1;

  if(productFound.quantity == 0)
  {
    this.shoppingCart.products.splice(this.shoppingCart.products.indexOf(productFound),1);
  }

  this.shoppingCart.totalQuantity -= 1;
  this.getTotalCartQuantity.next(this.shoppingCart.totalQuantity); 

  }

  console.log(this.shoppingCart);

}


removeAllProductsFromCart() {
  this.shoppingCart.products = [];
  this.shoppingCart.totalQuantity = 0;
}


}


