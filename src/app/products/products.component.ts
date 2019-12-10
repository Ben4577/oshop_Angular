import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
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
categories$
category: string;

  constructor(
    route: ActivatedRoute,
    productService: ProductService, 
    categoryService: CategoryService
    ) 
    {


  //Get Products
  productService.getAll().subscribe(products => 
    {
    this.products = products
    
      //cant use snapshot, we have to subscribe instead
      route.queryParamMap.subscribe(params => {

        this.category = params.get('category');
        
        this.filteredProducts = (this.category) ? 
        this.products.filter(p => p.category === this.category) : this.products;
     });
 
    });


  //Get Products (usong Switch Map)
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


  //Get Categories
  this.categories$ = categoryService.getAll();

   }


}
