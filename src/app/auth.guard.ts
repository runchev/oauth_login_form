import { Auth } from './services/auth.service';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private auth:Auth, private router:Router){}
    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot){
       if(this.auth.authenticated()){
           return true;
       }else{
           this.router.navigate(['/']);
           return false;
       }
    }

}