import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { AuthService } from '../../../services/auth.service';
import { NgForm } from '@angular/forms/src/directives';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'app-reg',
  templateUrl: './reg.component.html',
  styleUrls:   ['./reg.component.scss']
})
export class RegComponent implements OnInit {
  // tslint:disable-next-line:whitespace
  user:     string;
  email:    string;
  password: string;
  showSpinner:boolean=false;
  constructor( 
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    // setTimeout(()=>{
    //   this.showSpinner = false;
    // },3000)
  }
  // tslint:disable-next-line:one-line
  onRegister(f:NgForm){
    this.showSpinner = true
    this.authService.onRegister(this.user,this.email,this.password).subscribe(
      (res)=>{
        this.showSpinner = false;
        localStorage.setItem('token',res.token);
        this.router.navigate(['/dashboard']);
        
        // console.log(res);
      },(err)=>{
        // console.log(err)
      }
    );
  }
}