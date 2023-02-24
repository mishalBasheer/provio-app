import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { startCreateNewBoard } from 'src/app/components/dashboard/state/workspace.action';
import { AppState } from 'src/app/store/app.state';

export interface BoardDialogData{
  project:string;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  constructor(private store: Store<AppState>,@Inject(MAT_DIALOG_DATA) public data: BoardDialogData) {}
  boardForm!: FormGroup;
  
  ngOnInit(): void {
    this.boardForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
  }
  newBoardSubmit() {
    if(this.boardForm.invalid){
      return;
    }
    const title = this.boardForm.value.title;
    const description= this.boardForm.value.description;
    const project = this.data.project;

    this.store.dispatch(startCreateNewBoard({title,description,project}));
    
  }
}
