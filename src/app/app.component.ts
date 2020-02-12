import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  string;
  string2;
  title = 'oshop';


constructor(private router: Router) {
  this.router.navigate(['']);
}

ngOnInit() {
let emptyString: string = ""
window.sessionStorage.setItem('token', emptyString);
}

}
