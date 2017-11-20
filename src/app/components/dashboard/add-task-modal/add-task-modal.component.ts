import { CanLoad } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector:'add-task-modal',
    templateUrl:'./add-task-modal.component.html',
    styleUrls:['./add-task-modal.component.scss']
})

export class AddTaskModalComponent {
    constructor(
        private matDaialogRef:MatDialogRef<any>
    ){}
close():void{
    this.matDaialogRef.close({
        harout:'yeah'
    });
 
}
onAddTask(f:NgForm){
    console.log(f);
}
}