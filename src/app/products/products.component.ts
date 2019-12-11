import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

products: Product[]= [];
filteredProducts: Product[] = [];
category: string;

  constructor(
    route: ActivatedRoute,
    productService: ProductService, 
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


  //Get Products (using Switch Map)
 // productService
  //.getAll()
  //.switchMap(products =>  {
  //  this.products = products;
  //  return route.queryParamMap;
  //}).subscribe(params => {
   //     this.category = params.get('category');
 
     //    this.filteredProducts = (this.category) ? 
     //    this.products.filter(p => p.category === this.category) : this.products;
    // });




   }


}
