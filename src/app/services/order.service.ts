import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl:string = 'https://localhost:44377/api/oshop/';

  constructor(private http: HttpClient) { }

  storeOrder(order): Observable<any> {
    console.log(order);
    const url = this.baseUrl + 'placeOrder/';
    return this.http.post(url, order) as Observable<any>; 
  }

}
