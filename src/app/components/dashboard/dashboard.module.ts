import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRouteModule } from './dashboard.route.module';

import { DashboardComponent } from './dashboard.component';
import { IndividualTasksComponent } from './individual-tasks/individual-tasks.component';
import { AddTaskModalComponent } from './add-task-modal/add-task-modal.component';


import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';

@NgModule({
    declarations:[
        DashboardComponent,
        IndividualTasksComponent,
        AddTaskModalComponent
    ],
    entryComponents:[AddTaskModalComponent],
    imports:[
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