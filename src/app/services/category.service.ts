import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

baseUrl:string = 'https://localhost:44377/api/oshop/';

constructor(private http: HttpClient) { }

getAll(): Observable<Category[]> {
  return this.http.get<Category[]>(this.baseUrl + 'getCategories');
 }
 
}

interface Category {
  name: string;
}