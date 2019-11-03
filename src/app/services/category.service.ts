import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

categoriesArray: any;

constructor() { }


getCategories() {
  this.categoriesArray = [
    {name: "bread"},
    {name: "dairy"},
    {name: "Fruits"},
    {name: "Seasonings and Spices"},
    {name: "Vegetables"}
  ]

  return this.categoriesArray;
}


}
