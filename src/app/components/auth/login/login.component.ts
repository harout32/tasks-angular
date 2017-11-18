import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  onLogin(){
    this.authService.onLogin(this.email,this.password).subscribe(
      (res)=>{
        localStorage.setItem('token',res.token);
        this.router.navigate(['/dashboard']);
      }
    )
  }

}
