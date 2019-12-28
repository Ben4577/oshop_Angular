import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Products';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

products: Product[]= [];
filteredProducts: Product[] = [];

category: string;

ngOnInit() {
  this.shoppingCart.getOrCreateCart()
}

  constructor(
    route: ActivatedRoute,
    productService: ProductService, 
    private shoppingCart: ShoppingCartService
    ) 
    {

   
  //Get Products
  productService.getAll().subscribe(products => 
    {
    this.products = products
    
      //cant use snapshot, we have to subscribe instead
      route.queryParamMap.subscribe(params => {

        //High level which then filters this to lower component Product-Filter Component
        this.category = params.get('category');

        this.filteredProducts = (this.category) ? 
        this.products.filter(p => p.category === this.category) : this.products;
     });
 
    });


   }


}
