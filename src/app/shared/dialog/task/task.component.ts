import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  title!:string;
  taskForm!: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void {
    this.taskForm = new FormGroup({
      //here the initial value is not null
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
  }
  newTaskSubmit() {
    if (this.taskForm.invalid) {
      return;
    }
    const title = this.taskForm.value.title;
    const description= this.taskForm.value.description;
  }
}
