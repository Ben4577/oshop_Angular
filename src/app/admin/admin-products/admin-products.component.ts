import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/Products'
import { Subscription } from 'rxjs';
declare var $;


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  dataTable: any;


products: Product[];
filteredProducts: Product[];
subscription: Subscription;
//tableRsource: DataTableResource<Product>;
items: Product[] = [];
itemCount: Number;




  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getAll().subscribe(result =>
      {        
      this.filteredProducts = this.products = result;
     // this.intializeTable(result);
      });
    }


 // private intializeTable(products: Product[]){
   // this.tableRsource = new DataTableResource(this.products);
  //  this.tableRsource.query({ offset: 0})
  //  .then(items => this.items = items);
   // this.tableRsource.count()
   // .then(count => this.itemCount = count);
   // }


   // reloadItems(params) {
   //   if(!this.tableRsource) return;
   //   this.tableRsource.query(params)
    //  .then(items => this.items = items);
   // }

  //filter(query: string) {
  //console.log(query);
  //this.filteredProducts = (query) ? this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
 //}


  ngOnDestroy() {
  this.subscription.unsubscribe();
  }


  ngOnInit() {
    //this.dataTable = $(this.table.nativeElement);
    //this.dataTable.data;
  }

}
