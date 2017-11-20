import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from './header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
//guards
import { AuthGuard } from '../../services/auth.guard';


const routes : Routes = [
    { path: '', redirectTo:'/dashboard', pathMatch:'full' }, 
    { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule', canLoad:[AuthGuard]},
    { path: 'auth', loadChildren: '../auth/auth.module#AuthModule'}
  ]
@NgModule({
declarations: [HeaderComponent],
imports:[
    MatToolbarModule,
    RouterModule.forRoot(routes, { preloadingStrategy : PreloadAllModules }),
],
exports: [
    HeaderComponent,
    RouterModule
],
providers: [TasksService, AuthService, AuthGuard]
}) 

export class CoreModule {}