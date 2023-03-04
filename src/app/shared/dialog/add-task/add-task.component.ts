import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface AddTaskDialogData {
  list: string;
}

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  title!: string;
  newTaskForm!: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: AddTaskDialogData) {}
  ngOnInit(): void {
    this.newTaskForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
      priority: new FormControl(null),
      checklist: new FormControl(null),
      attachments: new FormControl(null),
      due: new FormControl(null),
    });
  }
  newTaskSubmit() {
    if (this.newTaskForm.invalid) {
      return;
    }
    const { title, description, priority, checklist, attachments, due } =
      this.newTaskForm.value;
    console.log({ title, description, priority, checklist, attachments, due });
    
  }
}
