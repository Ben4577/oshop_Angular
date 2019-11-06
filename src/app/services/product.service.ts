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


create(product): Observable<Product> {
  console.log(product);

  const url = this.baseUrl + 'createproduct/';
  return this.http.post(url, product) as Observable<Product>; 
}


get(): Observable<Product[]> {
 return this.http.get<Product[]>(this.baseUrl + 'getproducts');
}

}
