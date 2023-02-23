import { createAction, props } from '@ngrx/store';
import { OrgState } from '../orgs/state/orgs.state';
import { ProjectState } from '../projects/state/projects.state';

export const REQUEST_ORG_DATA = '[workspace] request org data';
export const SET_ORG_DATA = '[workspace] set org data';
export const START_CREATE_NEW_PROJECT = '[workspace] start create new project';
export const CREATE_NEW_PROJECT = '[workspace] create new project';


export const requestOrgData = createAction(REQUEST_ORG_DATA);
export const setOrgData = createAction(SET_ORG_DATA,props<{org:OrgState}>());
export const startCreateNewProject = createAction(START_CREATE_NEW_PROJECT,props<{title:string;description:string}>());
export const createNewProject = createAction(CREATE_NEW_PROJECT,props<{project:ProjectState}>());
