import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({
providedIn: 'root'
})

export class JwtService {
    constructor(private httpClient: HttpClient) { }
  //PROD URL
  apiURL : string ='http://13.237.242.40:8083/Service/AAFIDataService/Login'; 

    
 public getUserLogin( user :string, password: string){ 
    
    var dat = { "UserName":user, "Password":password   }
    console.log(dat);
    return this.httpClient.post(`${this.apiURL}/Check/`,dat); 
    
}

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }
}