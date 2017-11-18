import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../ui/loading/loading.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { AuthRouteModule } from './auth.route.module';




@NgModule({
    declarations:[
        RegComponent,
        LoginComponent,
        LoadingComponent
    ],
    imports: [
        CommonModule,
        AuthRouteModule,
        SharedModule
    ]
})
export class AuthModule {}