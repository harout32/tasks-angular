import { CanLoad } from '@angular/router';
import { AddTaskModalComponent } from '../add-task-modal/add-task-modal.component';
import { DragulaService } from 'ng2-dragula/components/dragula.provider';
import { IndividualTask } from '../../../model/individual-task.model';
import { TasksService } from '../../../services/tasks.service';
import { Subscription } from 'rxjs/Rx';
import { NgForm } from '@angular/forms/src/directives';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material';



@Component({
  selector:    'app-individual-tasks',
  templateUrl: './individual-tasks.component.html',
  styleUrls:   ['./individual-tasks.component.scss']
})
export class IndividualTasksComponent implements OnInit,OnDestroy {
  subscription:Subscription;

  ongoingTasks:   IndividualTask[] = [];
  onholdTasks:    IndividualTask[] = [];
  todayTasks:     IndividualTask[] = [];
  urgentTasks:    IndividualTask[] = [];
  completedTasks: IndividualTask[] = [];
  constructor(
    private tasksService:   TasksService,
    private dragulaService: DragulaService,
    public dialog:          MatDialog
  ) {
    dragulaService.dropModel.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
   }

  ngOnInit() {
    this.subscription = this.tasksService.updatedTasksSubject.subscribe(
      (tasks:IndividualTask[])=>{
        this.ongoingTasks   = [];
        this.onholdTasks    = [];
        this.todayTasks     = [];
        this.urgentTasks    = [];
        this.completedTasks = [];
      tasks.forEach((task)=>{
        switch(task.state){
          case 'ongoing':
          this.ongoingTasks.push(task);
          break;
          case 'onhold':
          this.onholdTasks.push(task);
          break;
          case 'today':
          this.todayTasks.push(task);
          break;
          case 'urgent':
          this.urgentTasks.push(task);
          break;
          case 'completed' :
          this.completedTasks.push(task);
          break;
        }
      })
      });
    this.tasksService.getUserTasks();
  }
  // openTaskAdding() {
  //   this.modalService.open(AddTasksModalComponent);
  // }
  private onDrop(args) {
    let [e, el] = args;
    // do something

    this.tasksService.updatTaskById(e.id,el.id).subscribe();
  }
  openDialog() {
    this.dialog.open(AddTaskModalComponent,{
      minWidth:'50%',
      minHeight:'50%'
    })
    .afterClosed()
    .subscribe(result=> console.log(result)
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
  
}
 