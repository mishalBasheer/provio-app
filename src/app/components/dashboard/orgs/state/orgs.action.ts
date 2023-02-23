import { createAction, props } from '@ngrx/store';
import { OrgsState } from './orgs.state';

export const REQUEST_ORG_DATA = '[org page] request org data';
export const GET_ORG_DATA = '[org page] get org data';

export const requestOrgData = createAction(REQUEST_ORG_DATA);
export const getOrgData = createAction(
  GET_ORG_DATA,
  props<OrgsState>()
);
