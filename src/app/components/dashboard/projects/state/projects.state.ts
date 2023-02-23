import { Role } from 'src/app/models/role.model';
import { TaskState } from '../../tasks/state/tasks.state';

export interface ProjectState {
  _id: string;
  title: string;
  description: string;
  members: Member[];
  org: string;
  boards?: BoardState[];
}
export interface BoardState {
  _id: string;
  title: string;
  description: string;
  project:string;
  list?: ListState[];
}
export interface ListState{
  _id: string;
  title: string;
  board: string;
  task?: TaskState[];
}
export interface ProjectsState {
  projects: ProjectState[];
}
export interface Member {
  user: string;
  role: Role;
}
export const initialState: ProjectsState = {
  projects: [],
};
