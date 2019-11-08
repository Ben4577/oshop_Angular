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
    {name: "fruits"},
    {name: "seasonings"},
    {name: "vegetables"}
  ]

  return this.categoriesArray;
}


}
