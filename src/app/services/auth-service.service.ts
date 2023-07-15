import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  //login Api

  public  loginApiUrl = "https://api.escuelajs.co/api/v1/auth/login";
  public  registerApiUrl = "https://api.escuelajs.co/api/v1/users/";

  constructor(private http:HttpClient) { }



  onLogin(obj:any):Observable<any>{
    return this.http.post(this.loginApiUrl,obj);
    
  }

  onLogout(){
    localStorage.removeItem('token')

  }

  onRegister(obj:any){

    return this.http.post(this.registerApiUrl,obj)

  }

  isLoggedIn(){
    var token = localStorage.getItem('token');
    if(token=="" || token ===undefined || token ===null){
       return false;
    }
    else{
      return true;
    }
  }

  
}
