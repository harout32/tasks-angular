import { Observable, Subject } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { IndividualTask } from '../model/individual-task.model';

const PORT = 'https://tasks-ha.herokuapp.com';
// const PORT = 'http://localhost:3000';

@Injectable()
export class TasksService {
  tasks:IndividualTask[] = [];
  public updatedTasksSubject = new Subject<IndividualTask[]>()
  constructor(
    private http:Http
  ) { }
  
  addTask(title:string,description:string){ 
    let headers:Headers = new Headers({'x-auth':localStorage.getItem('token')}) ;
    
   return this.http.post(PORT+'/todos',{title,description},{headers})
   .map((response:Response)=>{
     //getting the tasks after adding one to theme 
     this.getUserTasks();
     return response.json();
   }).catch((err:Response)=>Observable.throw(err));
  }

  getUserTasks(){
    let headers:Headers = new Headers({'x-auth':localStorage.getItem('token')}) ;
    this.http.get(PORT+'/todos',{headers})

    .map((response:Response)=>{
      return response.json();
    }).catch(err=>Observable.throw(err))

    .subscribe(

      (res)=>{
        this.tasks = res.todos;
        this.updatedTasksSubject.next(this.tasks);
      },(err)=>{
      });
  }

  //update a task
  
  updatTaskById(id,state){
    let headers:Headers = new Headers({'x-auth':localStorage.getItem('token')}) ;
    return this.http.patch(PORT+'/todos/'+id,{state},{headers})
    .map((response:Response)=>{
      let obj =response.json().todo;
      
      let index = this.tasks.findIndex(task=> task._id === id)
      this.tasks.splice(index,1);

      this.tasks.push(obj);
      this.updatedTasksSubject.next(this.tasks);
      return obj;
    }).catch((error:Response)=>Observable.throw(error));
  }
}
