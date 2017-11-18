import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { IndividualTasksComponent } from './individual-tasks/individual-tasks.component';

import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';
import { DashboardRouteModule } from './dashboard.route.module';


@NgModule({
    declarations:[
        DashboardComponent,
        IndividualTasksComponent
    ],
   
    imports:[
        CommonModule,
        DashboardRouteModule,
        SharedModule,
        DragulaModule,
        SharedModule
    ],

providers: [
    DragulaService
]
})

export class DashboardModule {

}