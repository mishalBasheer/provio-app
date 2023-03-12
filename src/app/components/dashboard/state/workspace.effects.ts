import { Injectable, Injector } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of } from 'rxjs';
import { WorkspaceService } from 'src/app/services/workspace.service';
import { SharedService } from 'src/app/shared/shared.service';
import { AppState } from 'src/app/store/app.state';
import {
  setErrorMessage,
  setLoadingSpinner,
} from 'src/app/store/shared/shared.action';
import {
  createNewBoard,
  createNewList,
  createNewProject,
  createNewTask,
  moveTasksInList,
  requestOrgData,
  setOrgData,
  startCreateNewBoard,
  startCreateNewList,
  startCreateNewProject,
  startCreateNewTask,
  startMoveTasksInList,
  startTransferListItem,
  transferListItem,
} from './workspace.action';

@Injectable()
export class WorkspaceEffects {
  constructor(
    private actions$: Actions,
    private injector: Injector,
    private store: Store<AppState>
  ) {}
  workspaceService = this.injector.get(WorkspaceService);
  sharedService = this.injector.get(SharedService);

  //load Org Data
  loadOrg$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(requestOrgData),
      mergeMap(() => {
        return this.workspaceService.getOrgData().pipe(
          map((data) => {
            //loading spinner set false
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.store.dispatch(setErrorMessage({ message: '' }));

            //trigger action SET_ORG_DATA
            return setOrgData({ org: data.org });
          }),
          catchError((errResponse) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMsg = this.sharedService.getErroMsg(
              errResponse.error.message
            );
            return of(setErrorMessage({ message: errorMsg }));
          })
        );
      })
    );
  });

  //create new project
  createNewProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(startCreateNewProject),
      mergeMap((action) => {
        return this.workspaceService.createNewProject(action).pipe(
          map((data) => {
            //loading spinner set false
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.store.dispatch(setErrorMessage({ message: '' }));

            //set new project to state
            return createNewProject({ project: data.data.project });
          }),
          catchError((errResponse) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMsg = this.sharedService.getErroMsg(
              errResponse.error.message
            );
            return of(setErrorMessage({ message: errorMsg }));
          })
        );
      })
    );
  });

  //create new board
  createNewBoard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(startCreateNewBoard),
      mergeMap((action) => {
        return this.workspaceService.createNewBoard(action).pipe(
          map((data) => {
            //loading spinner set false
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.store.dispatch(setErrorMessage({ message: '' }));

            //set new board to state
            return createNewBoard({
              board: data.data.board,
              project: action.project,
            });
          }),
          catchError((errResponse) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMsg = this.sharedService.getErroMsg(
              errResponse.error.message
            );
            return of(setErrorMessage({ message: errorMsg }));
          })
        );
      })
    );
  });

  //move tasks within a list
  moveTasksInList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(startMoveTasksInList),
      mergeMap((action) => {
        const { boardId, currentList, currentIndex, previousIndex } = action;
        return this.workspaceService
          .moveTaskFromList(boardId, currentList, previousIndex, currentIndex)
          .pipe(
            map(() => {
              //loading spinner set false
              this.store.dispatch(setLoadingSpinner({ status: false }));
              this.store.dispatch(setErrorMessage({ message: '' }));

              //alter state of list
              return moveTasksInList({
                currentList,
                previousIndex,
                currentIndex,
              });
            }),
            catchError((errResponse) => {
              this.store.dispatch(setLoadingSpinner({ status: false }));
              const errorMsg = this.sharedService.getErroMsg(
                errResponse.error.message
              );
              return of(setErrorMessage({ message: errorMsg }));
            })
          );
      })
    );
  });

  //transfer tasks between lists
  transferTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(startTransferListItem),
      mergeMap((action) => {
        return this.workspaceService
          .transferTask(
            action.boardId,
            action.previousList,
            action.currentList,
            action.previousIndex,
            action.currentIndex
          )
          .pipe(
            map(() => {
              //loading spinner set false
              this.store.dispatch(setLoadingSpinner({ status: false }));
              this.store.dispatch(setErrorMessage({ message: '' }));

              return transferListItem({
                previousList: action.previousList,
                currentList: action.currentList,
                previousIndex: action.previousIndex,
                currentIndex: action.currentIndex,
              });
            }),
            catchError((errResponse) => {
              this.store.dispatch(setLoadingSpinner({ status: false }));
              const errorMsg = this.sharedService.getErroMsg(
                errResponse.error.message
              );
              return of(setErrorMessage({ message: errorMsg }));
            })
          );
      })
    );
  });

  //create new task
  createNewTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(startCreateNewTask),
      mergeMap((action) => {
        return this.workspaceService.createTask(action.task).pipe(
          map((data) => {
            //loading spinner set false
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.store.dispatch(setErrorMessage({ message: '' }));

            return createNewTask({ task: data.task });
          }),
          catchError((errResponse) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMsg = this.sharedService.getErroMsg(
              errResponse.error.message
            );
            return of(setErrorMessage({ message: errorMsg }));
          })
        );
      })
    );
  });

  //create new list in a board
  createBoard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(startCreateNewList),
      mergeMap((action) => {
        return this.workspaceService
          .createList({ title: action.list.title, board: action.list.board })
          .pipe(
            map((data) => {
              //loading spinner set false
              this.store.dispatch(setLoadingSpinner({ status: false }));
              this.store.dispatch(setErrorMessage({ message: '' }));

              //changes the state
              return createNewList({list:data.list});
            }),
            catchError((errResponse)=>{
              this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMsg = this.sharedService.getErroMsg(
              errResponse.error.message
            );
            return of(setErrorMessage({ message: errorMsg }));
            })
          );
      })
    );
  });
}
