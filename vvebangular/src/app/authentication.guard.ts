import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  
  constructor(private ngrouter: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    )
    : boolean
     {
      const token = sessionStorage.getItem('token');
      if (state.url == '/login' && token) {
        this.ngrouter.navigate(['/pages']);
        return true;
      }
      
     if (token) {
        //Authorization logic here
       return true;
      }
      else {
        if (state.url != '/login') {
             this.ngrouter.navigate(['/login']);
          return false;
        } else {
          return true;
        }
      }
  }
}