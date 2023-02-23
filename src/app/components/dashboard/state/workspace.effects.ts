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
import { requestOrgData, setOrgData } from './workspace.action';

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
}
