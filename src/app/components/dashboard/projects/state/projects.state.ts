import { Role } from 'src/app/models/role.model';

export interface ProjectState {
  id: string;
  title: string;
  description: string;
  members: Member[];
  org: string;
  boards?: string[];
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
