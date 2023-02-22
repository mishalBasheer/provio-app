import { createFeatureSelector } from '@ngrx/store';
import { ProjectsState } from './projects.state';

export const PROJECT_STATE_NAME = 'project';

export const getProjectState =
  createFeatureSelector<ProjectsState>(PROJECT_STATE_NAME);
