import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { startCreateNewProject } from 'src/app/components/dashboard/state/workspace.action';
import { AppState } from 'src/app/store/app.state';

export interface OrgId {
  org: string | undefined;
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  projectForm!: FormGroup;
  ngOnInit(): void {
    this.projectForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
  }
  newProjectSubmit() {
    if(this.projectForm.invalid){
      return;
    }
    const title = this.projectForm.value.title;
    const description= this.projectForm.value.description;

    this.store.dispatch(startCreateNewProject({title,description}));
    
  }
}
