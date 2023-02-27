import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WorkspaceState } from './workspace.state';

export const WORKSPACE_STATE_NAME = 'workspace';
const getWorkspaceState =
  createFeatureSelector<WorkspaceState>(WORKSPACE_STATE_NAME);
export const getCurrentOrgName = createSelector(getWorkspaceState, (state) => {
  return state.org?.name;
});
export const getOrgProjects = createSelector(getWorkspaceState, (state) => {
  return state.org?.projects;
});
export const getOrgId = createSelector(getWorkspaceState, (state) => {
  return state.org?._id;
});

export const getProjectById = (id: string) =>
  createSelector(getWorkspaceState, (state) => {
    return state.org?.projects?.find((project) => project._id === id);
  });
export const getBoardById = (projectid: string, boardid: string) =>
  createSelector(getWorkspaceState, (state) => {
    //geting project by id
    const project = state.org?.projects?.find(
      (project) => project._id === projectid
    );
    //geting board by id
    const board = project?.boards?.find((board) => board._id === boardid);

    return board;
  });
