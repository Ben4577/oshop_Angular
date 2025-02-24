import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { LoginService} from './services/login.service';
import { CategoryService } from './services/category.service';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import {CustomFormsModule} from 'ng2-validation';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DataTablesModule } from 'angular-datatables';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { OrderService } from './services/order.service';
import { AuthGuard } from './guards/auth.guard';
import { ConfirmUpdateModalComponent } from './confirm-update-modal/confirm-update-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ErrorpageComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ConfirmUpdateModalComponent,
  ],
  imports: [
    RouterModule.forRoot([
    {
      path: '', 
      component: ProductsComponent
    },
    {
      path: 'products', 
      component: ProductsComponent
    },
    {
      path: 'shopping-cart', 
      component: ShoppingCartComponent
    },
    {
      path: 'check-out',
      component: CheckOutComponent,
      canActivate : [AuthGuard]
    },
    {
      path: 'order-success', 
      component: OrderSuccessComponent,
      canActivate : [AuthGuard]
    },   
    {
      path: 'my/orders', 
      component: MyOrdersComponent,
      canActivate : [AuthGuard]
    },
    {
      path: 'login', 
      component: LoginComponent},
    {
      path: 'admin/products', 
      component: AdminProductsComponent,
    },
    {
      path: 'admin/products/new',
      component: ProductFormComponent,
      canActivate : [AuthGuard]
    },
    {
      path: 'admin/products/:id', 
      component: ProductFormComponent,
      canActivate : [AuthGuard]
    },
      {path: 'admin/orders', 
      component: AdminOrdersComponent,
      canActivate : [AuthGuard]
    },
    {
      path: 'errorpage', 
      component: ErrorpageComponent
    },
    ]),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CustomFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  entryComponents: [
    ConfirmUpdateModalComponent
  ],
  providers: [
    CategoryService,
    LoginService,
    ProductService,
    ShoppingCartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
