import { Role } from 'src/app/models/role.model';
import { BoardState } from '../../boardbyid/state/board.state';
import { TaskState } from '../../tasks/state/tasks.state';

export interface ProjectState {
  _id: string;
  title: string;
  description: string;
  members: Member[];
  org: string;
  boards?: BoardState[];
}

export interface ListState{
  _id: string;
  title: string;
  board: BoardState;
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
