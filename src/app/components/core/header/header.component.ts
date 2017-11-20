import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  logout(){
    this.authService.onLogOut().subscribe(
      (res)=>{
        localStorage.clear();
        this.router.navigate(['/auth/login']);
      },(err)=>{
      }
    );
  }
}
