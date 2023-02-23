import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WorkspaceState } from './workspace.state';

export const WORKSPACE_STATE_NAME = 'workspace';
const getWorkspaceState =
  createFeatureSelector<WorkspaceState>(WORKSPACE_STATE_NAME);
export const getCurrentOrgName = createSelector(getWorkspaceState, (state) => {
  return state.org?.name;
});
export const getOrgProjects = createSelector(getWorkspaceState,(state)=>{
  return state.org?.projects;
});
export const getOrgId=createSelector(getWorkspaceState,(state)=>{
  return state.org?._id;
})