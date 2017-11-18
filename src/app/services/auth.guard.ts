import { Response } from '@angular/http';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Route, Router, RouterStateSnapshot } from '@angular/router';
import 'rxjs/Rx';
import { CanLoad } from '@angular/router/src/interfaces';


@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild, CanLoad{
    constructor(
        private authService:AuthService,
        private router: Router
    ){}

    canActivate(
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot): Observable<boolean> | boolean{
         return  this.authService.getUserInfo();
    }
    canActivateChild(route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot): Observable<boolean> | boolean{
            return  this.authService.getUserInfo();
    }
    canLoad(route: Route): Observable<boolean> | boolean{
            return  this.authService.getUserInfo();
        }
}