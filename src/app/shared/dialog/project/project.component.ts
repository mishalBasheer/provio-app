import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

export interface OrgId {
  org: string|undefined;
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  constructor(private store:Store<AppState>){}
  projectForm!:FormGroup;
  ngOnInit(): void {
    this.projectForm=new FormGroup({
      fname: new FormControl(null, [Validators.required]),
      lname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      org: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    })
      console.log("hello from project dialog");
  }
  newProjectSubmit(){
    console.log('hey')
  }
}
