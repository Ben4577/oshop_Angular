import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Products'


@Injectable({
  providedIn: 'root'
})
export class ProductService {


baseUrl:string = 'https://localhost:44377/api/oshop/';
body;

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

constructor(private http: HttpClient) { }

getAll(): Observable<Product[]> {
  return this.http.get<Product[]>(this.baseUrl + 'getProducts');
 }
 
 get(productId){
   return this.http.get<Product>(this.baseUrl + 'getProduct/' + productId);
 }

create(product): Observable<Product> {
  console.log(product);

  const url = this.baseUrl + 'createProduct/';
  return this.http.post(url, product) as Observable<Product>; 
}

update(product): Observable<Product> {
  console.log(product);

  const url = this.baseUrl + 'updateProduct/';
  return this.http.put(url, product) as Observable<Product>; 
}


delete(productId): Observable<boolean> {
  const url = this.baseUrl + 'deleteProduct/';
  return this.http.delete(url + productId) as Observable<boolean>;
}



}
