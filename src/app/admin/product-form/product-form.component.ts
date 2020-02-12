import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/Products'
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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
adminUpdateError : string = ""



constructor(
  private router: Router,
  private route: ActivatedRoute,
  categoryService: CategoryService,
  private productService: ProductService) {

  let subscription = categoryService.getAll().subscribe(result =>
  {
    this.categories$ = result;
  });
  subscription.unsubscribe;


  this.id = this.route.snapshot.paramMap.get('id');
  if(this.id) {
    let subscription = this.productService.get(this.id).subscribe(result =>
      {     
      this.product = result;
      console.log(result);
      }
    )
    subscription.unsubscribe;
  }
}



save(product){
  if(this.id)
  {
    product.id = this.id;
    let subscription = this.productService.update(product).subscribe(result =>
      {
    console.log("updated : " + result.id);
    this.router.navigate(['/admin/products']);
      },
    error => this.adminUpdateError = "You are not Authorised to Update this product."
    );
    subscription.unsubscribe;
  }
  else
  {
    let subscription =this.productService.create(product).subscribe(result =>
      {
    console.log("created : " + result.id);
    this.router.navigate(['/admin/products']);
      },
      error => this.adminUpdateError = "You are not Authorised to Create this product."
    );
    subscription.unsubscribe;
  }
}


delete() {
  if(!confirm('Are you sure you want to delete this product?')) return;
  let subscription = this.productService.delete(this.id).subscribe(result =>
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
    subscription.unsubscribe;
}



ngOnInit() {
}


}