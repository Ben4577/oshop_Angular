import { Injectable, EventEmitter, Output } from '@angular/core';
import { getDefaultService } from 'selenium-webdriver/opera';
import { User } from '../models/user'
import { Observable, empty, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/LoginModel';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

user: User;
baseUrl:string = 'https://localhost:44377/api/account/';

getUserLoginStatus: BehaviorSubject<string> = new BehaviorSubject<string>(null);

constructor(private http: HttpClient) {  
 
}

public getUser()
{
}

public setUser(loginModel: LoginModel) : Observable<string> 
{
  var result =  this.http.post(this.baseUrl + 'login', loginModel);
return result as Observable<string>
}

}







