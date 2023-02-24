import { createReducer, on } from '@ngrx/store';
import {
  createNewBoard,
  createNewProject,
  setOrgData,
} from './workspace.action';
import { initialState } from './workspace.state';

const _workspaceReducer = createReducer(
  initialState,
  on(setOrgData, (state, action) => {
    return {
      ...state,
      org: action.org,
    };
  }),
  on(createNewProject, (state, action) => {
    console.log(action);

    if (state.org?.projects) {
      return {
        ...state,
        org: {
          ...state.org,
          projects: [...state.org.projects, action.project],
        },
      };
    }
    return {
      ...state,
    };
  }),
  on(createNewBoard, (state, action) => {
    if (state.org?.projects) {
      const updatedProjects = state.org.projects.map((el) => {
        if (el._id == action.project) {
          if (el.boards) {
            return {
              ...el,
              boards: [...el.boards, action.board],
            };
          }
        }
        return el;
      });

      return {
        ...state,
        org: {
          ...state.org,
          projects: updatedProjects,
        },
      };
    }
    return {
      ...state,
    };
  })
);

export function WorkspaceReducer(state: any, action: any) {
  return _workspaceReducer(state, action);
}
