import { NgModule } from '@angular/core';
import { AuthGuard } from '../../services/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { IndividualTasksComponent } from './individual-tasks/individual-tasks.component';





const router: Routes = [
    //the first empty path is because we declared it ('dashbaord') in the app Module 
    { path : '',component:DashboardComponent,
    children:[
        { path: '', redirectTo:'your-tasks', pathMatch:'full' },
        { path: 'your-tasks',component:IndividualTasksComponent}
    ] }
];


@NgModule({
    imports: [
        RouterModule.forChild(router)
    ],
    exports: [RouterModule]
})



export class DashboardRouteModule {}