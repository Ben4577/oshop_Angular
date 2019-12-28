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
  return this.http.get<Product[]>(this.baseUrl + 'getproducts');
 }
 
 get(productId){
   return this.http.get<Product>(this.baseUrl + 'getproduct/' + productId);
 }

create(product): Observable<Product> {
  console.log(product);

  const url = this.baseUrl + 'createproduct/';
  return this.http.post(url, product) as Observable<Product>; 
}

update(product): Observable<Product> {
  console.log(product);

  const url = this.baseUrl + 'updateproduct/';
  return this.http.put(url, product) as Observable<Product>; 
}


delete(productId): Observable<boolean> {
  const url = this.baseUrl + 'deleteproduct/';
  return this.http.delete(url + productId) as Observable<boolean>;
}



}
