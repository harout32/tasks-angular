import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TasksService } from '../../services/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private tasksService:TasksService,
    private authService:AuthService,
    private router:Router
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
