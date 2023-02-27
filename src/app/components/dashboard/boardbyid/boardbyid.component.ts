import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { BoardState } from '../projects/state/projects.state';
import { getBoardById } from '../state/workspace.selector';

@Component({
  selector: 'app-boardbyid',
  templateUrl: './boardbyid.component.html',
  styleUrls: ['./boardbyid.component.css'],
})
export class BoardbyidComponent implements OnInit {
  constructor(private _store: Store<AppState>, public route: ActivatedRoute) {}

  boards$!: Observable<BoardState | undefined>;
  private _boardid!: string;
  private _projectid!: string;
  openTaskDialog() {
    console.log('hello');
  }
  ngOnInit(): void {

    //board id and project id are in the params
    this.route.params.subscribe((params) => {
      this._projectid = params['id'];
      this._boardid = params['boardid'];
    });

    //get board data as return from selector
    this.boards$ = this._store.select(
      getBoardById(this._projectid, this._boardid)
    );
  }

  //give action to add list
  //give action to add task
}
