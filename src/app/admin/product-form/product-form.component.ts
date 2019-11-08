import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/Products'
import { Router, ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

categories$;
products = [];
product = {};
id;


constructor(
  private router: Router,
  private route: ActivatedRoute,
  categoryService: CategoryService,
  private productService: ProductService) {

  this.categories$ = categoryService.getCategories();

  this.id = this.route.snapshot.paramMap.get('id');
  if(this.id) {
    this.productService.get(this.id).subscribe(result =>
      {     
      this.product = result;
      console.log(result);
      }
    )
  }
}


 

save(product){
  if(this.id)
  {
    product.id = this.id;
    this.productService.update(product).subscribe(result =>
      {
    console.log("updated : " + result.id);
    this.router.navigate(['/admin/products']);
      }
    );
  }
  else
  {
    this.productService.create(product).subscribe(result =>
      {
    console.log("created : " + result.id);
    this.router.navigate(['/admin/products']);
      }
    );
  
  }
}


ngOnInit() {
}


}