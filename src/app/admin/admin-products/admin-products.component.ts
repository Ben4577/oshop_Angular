import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/Products'
import { Subscription, Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import * as $ from 'jquery';


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
items: Product[] = [];
itemCount: Number;


//Datatables Properties
dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();
@ViewChild(DataTableDirective, {static: true}) dtElement: DataTableDirective;


constructor(private productService: ProductService) { }


  ngOnInit() {
    
        //Datatable
        this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        autoWidth: true,
        order: [[0, 'desc']]
      };

      this.subscription = this.productService.getAll().subscribe(result =>
      {        
      this.filteredProducts = this.products = result;
       this. dtTrigger.next();
      });

  }



  ngOnDestroy() {
  this.subscription.unsubscribe();
  }



 

}
