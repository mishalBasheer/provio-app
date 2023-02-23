import { createReducer, on } from '@ngrx/store';
import { setOrgData } from './workspace.action';
import { initialState } from './workspace.state';

const _workspaceReducer = createReducer(
  initialState,
  on(setOrgData, (state, action) => {
    
    return {
      ...state,
      org: action.org,
    };
  })
);

export function WorkspaceReducer(state: any, action: any) {
  return _workspaceReducer(state, action);
}
