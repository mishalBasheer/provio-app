import { Role } from 'src/app/models/role.model';

export interface OrgState {
  _id: string;
  name: string;
  description: string;
  members: Member[];
  invites?: Member[];
  project?: string[];
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
