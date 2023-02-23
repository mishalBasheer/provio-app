import { Role } from 'src/app/models/role.model';
import { ProjectState } from '../../projects/state/projects.state';

export interface OrgState {
  _id: string;
  name: string;
  description: string;
  members: Member[];
  invites?: Member[];
  projects?: ProjectState[];
}
export interface OrgsState {
  orgs: OrgState[];
}
export interface Member {
  user: string;
  role: Role;
}
export const initialState: OrgsState = {
  orgs: [],
};
