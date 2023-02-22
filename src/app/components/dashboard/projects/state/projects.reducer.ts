import { createReducer, on } from '@ngrx/store';
import { getProjectData } from './projects.action';
import { initialState } from './projects.state';

const _projectsReducer = createReducer(
  initialState,
  on(getProjectData, (state, action) => {
    // const { id, name, description, members, invites, project } = action.projects;

    return {
      ...state,
      projects: [...action.projects],
    };
  })
);

export function ProjectsReducer(state: any, action: any) {
  return _projectsReducer(state, action);
}
