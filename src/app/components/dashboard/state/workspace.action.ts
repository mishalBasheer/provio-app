import { createAction, props } from '@ngrx/store';
import { OrgState } from '../orgs/state/orgs.state';

export const REQUEST_ORG_DATA = '[workspace] request org data';
export const SET_ORG_DATA = '[workspace] set org data';

export const requestOrgData = createAction(REQUEST_ORG_DATA);
export const setOrgData = createAction(SET_ORG_DATA,props<{org:OrgState}>());