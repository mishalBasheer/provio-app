import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/shared/shared.action';
import {
  loadBoard,
  startMoveTasksInList,
  startTransferListItem,
} from '../state/workspace.action';
import { getBoardById } from '../state/workspace.selector';
import { TaskState } from '../tasks/state/tasks.state';
import { BoardState } from './state/board.state';

@Component({
  selector: 'app-boardbyid',
  templateUrl: './boardbyid.component.html',
  styleUrls: ['./boardbyid.component.css'],
})
export class BoardbyidComponent implements OnInit {
  newList!:string|undefined;
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
    this._store.dispatch(
      loadBoard({ projectid: this._projectid, boardid: this._boardid })
    );

    //get board data as return from selector
    this.boards$ = this._store.select(getBoardById);
  }

  //give action to add list
  //give action to add task

  drop(event: CdkDragDrop<{ item: TaskState[]; index: number }>) {

    console.log(
      event.container.data.index,event.previousContainer.data.index
    );

    if (event.previousContainer === event.container) {
      if (event.currentIndex !== event.previousIndex) {
        this._store.dispatch(setLoadingSpinner({ status: true }));
        this._store.dispatch(
          startMoveTasksInList({
            boardId: this._boardid,
            currentList: event.container.data.index,
            currentIndex: event.currentIndex,
            previousIndex: event.previousIndex,
          })
        );
      }

      // moveItemInArray(
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex
      // );
    } else {
      // transferArrayItem(
      //   event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex
      // );
      // console.log(
      //   event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex
      // );
      this._store.dispatch(setLoadingSpinner({ status: true }));
      this._store.dispatch(
        startTransferListItem({
          boardId: this._boardid,
          previousList: event.previousContainer.data.index,
          currentList: event.container.data.index,
          previousIndex: event.previousIndex,
          currentIndex: event.currentIndex,
        })
      );
    }
  }
}
