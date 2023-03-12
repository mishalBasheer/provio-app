import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getTaskById } from 'src/app/components/dashboard/state/workspace.selector';
import { TaskState } from 'src/app/components/dashboard/tasks/state/tasks.state';
import { formatDate } from '@angular/common';

export interface UpdateTaskDialogData {
  taskid: string;
  listid: string;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  taskForm!: FormGroup;
  taskFormData$!: Observable<TaskState | undefined>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: UpdateTaskDialogData,
    private _store: Store<AppState>
  ) {}
  ngOnInit(): void {
    this.taskFormData$ = this._store.select(
      getTaskById(this.data.listid, this.data.taskid)
    );
    
    this.taskFormData$.subscribe(data=>{
      if(data?.due){
        this.taskForm = new FormGroup({
          //here the initial value is not null
          title: new FormControl(data?.title, [Validators.required]),
          description: new FormControl(data?.description),
          priority: new FormControl(data?.priority),
          attachment: new FormControl(data?.attachment),
          due: new FormControl(formatDate(data?.due, 'yyyy-MM-dd', 'en')),
        });

      }
    })
  }
  updatedTaskSubmit() {
    if (this.taskForm.invalid) {
      return;
    }
    const title = this.taskForm.value.title;
    const description = this.taskForm.value.description;
  }
}
