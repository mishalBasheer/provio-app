import { createReducer, on } from '@ngrx/store';
import { getOrgData } from './orgs.action';
import { initialState } from './orgs.state';

const _orgsReducer = createReducer(
  initialState,
  on(getOrgData, (state, action) => {
    // const { id, name, description, members, invites, project } = action.orgs;

    return {
      ...state,
      orgs: [...action.orgs],
    };
  })
);

export function orgsReducer(state: any, action: any) {
  return _orgsReducer(state, action);
}
