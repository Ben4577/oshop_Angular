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

categories$ = [];
products = [];
product = {};
id;


constructor(
  private router: Router,
  private route: ActivatedRoute,
  categoryService: CategoryService,
  private productService: ProductService) {


categoryService.getAll().subscribe(result =>
  {
    this.categories$ = result;
  });



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


delete() {
  if(!confirm('Are you sure you want to delete this product?')) return;
    this.productService.delete(this.id).subscribe(result =>
      { 
        alert("deleted");
        if(result)
        {
    this.router.navigate(['/admin/products']);
    console.log('item deleted');
        }
        else
        {
    this.router.navigate(['/errorpage'])
        }
      },
      error =>  this.router.navigate(['/errorpage'])
    );
}


ngOnInit() {
}


}