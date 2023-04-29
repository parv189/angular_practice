import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate():boolean{
    if(localStorage.getItem('username')!=null){
      //console.log(this.authservice.loogedin);
      return true
    }
    else{
      this.router.navigate(['/home'])
      //console.log(this.authservice.loogedin);
      return false
    }
  }
  
}
