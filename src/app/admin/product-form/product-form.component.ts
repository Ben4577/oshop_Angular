import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/Products'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

categories$;
products = [];


constructor(categoryService: CategoryService, private productService: ProductService) {
  this.categories$ = categoryService.getCategories();
 }



  ngOnInit() {
  }


  save(product){
  this.productService.create(product).subscribe(result =>
  console.log("saved : " + result.id)
  );
  }

  get()
  {
    this.productService.get().subscribe(result =>
      console.log(result)
      );
  }


}
