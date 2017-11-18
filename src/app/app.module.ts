import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//custom modules
import { SharedModule } from './shared/shared.module';
// import { AuthModule } from './components/auth/auth.module';

//guards
import { AuthGuard } from './services/auth.guard';

//services
import { TasksService } from './services/tasks.service';
import { AuthService } from './services/auth.service';
//app component which we bootstrap
import { AppComponent } from './app.component';

const routes : Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch:'full' },
  { path: 'dashboard', loadChildren: './components/dashboard/dashboard.module#DashboardModule', canLoad:[AuthGuard]},
  { path: 'auth', loadChildren: './components/auth/auth.module#AuthModule'}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    // AuthModule,
    SharedModule
  ],
  providers: [AuthGuard,TasksService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
