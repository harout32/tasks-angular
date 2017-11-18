import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', redirectTo:'/dashboard', pathMatch:'full' },
    { path : 'reg', component:RegComponent },
    { path : 'login' ,component: LoginComponent }
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AuthRouteModule {}