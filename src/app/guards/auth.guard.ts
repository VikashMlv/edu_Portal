import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   

    var authToken = localStorage.getItem("token");
    if(authToken=="" || authToken===undefined || authToken ===null){
      alert("aunauthorized access...please login ")
      return false;
     
    }
    else{
      alert("permission granted");
      return true;
      
    }
  }
  
}
