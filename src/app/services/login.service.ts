import { Injectable, EventEmitter, Output } from '@angular/core';
import { getDefaultService } from 'selenium-webdriver/opera';
import { User } from '../models/user'
import { Observable, empty, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

user: User;
//public getLoggedInUser = new Subject<User>();

constructor() {  
}


public getUser(): Observable<User> 
{
  return of (this.user);
}


public setUser()
{
  this.user = {
    displayName: "ben kellington",
    password: "password"
}

//console.log(this.user);
}



}
