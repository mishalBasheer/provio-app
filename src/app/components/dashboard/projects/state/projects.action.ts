import { createAction, props } from "@ngrx/store";
import { ProjectsState } from "./projects.state";

export const REQUEST_PROJECT_DATA = '[project page] request project data';
export const GET_PROJECT_DATA = '[project page] get project data';

export const requestProjectData = createAction(REQUEST_PROJECT_DATA);
export const getProjectData = createAction(
  GET_PROJECT_DATA,
  props<ProjectsState>()
);