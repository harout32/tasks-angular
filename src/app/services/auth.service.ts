import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

const PORT = 'https://tasks-ha.herokuapp.com';
// const PORT = 'http://localhost:3000';
@Injectable()
export class AuthService{
  
constructor(
    private http:Http,
    private router:Router
){}
public user;

getUserInfo():any{
    //check if the user is logged in and run every time /dashboard url is used via guard
    //return the observable as it is without subscribing to it becuse the guard automoaticly will do 
    // 
    let headers:Headers = new Headers({'x-auth':localStorage.getItem('token')}) ;

    return this.http.get(PORT+'/users/me',{headers:headers})
    .map((response:Response)=>{
        this.user = response.json();
        // this.router.navigate(['/dashboard/your-tasks']);
        return true;
    })
    .catch(err=>{
        this.router.navigate(['auth/reg']);
        return Observable.of(false)});
}

onRegister(name:string, email:string, password:string){
    let body = {name,email,password}

    return this.http.post(PORT+'/users',body).map(
        (response:Response)=>{
           return response.json();
        }
    ).catch(err=> Observable.throw(err));
}

onLogin (email:string, password:string) {
    let body = {email,password}
    return this.http.post(PORT+'/users/login',body).map(
        (response:Response)=>{
            return response.json();
        }
    ).catch(err=> Observable.throw(err));
}
onLogOut(){
    let headers:Headers = new Headers({'x-auth':localStorage.getItem('token')}) ;
    return this.http.delete(PORT+'/users/logout',{headers:headers})
   .catch((err:Response)=>Observable.throw(err));
}

}