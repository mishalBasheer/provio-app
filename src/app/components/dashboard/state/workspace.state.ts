import { OrgState } from '../orgs/state/orgs.state';

export interface WorkspaceState {
  org: OrgState | null;
}
export const initialState: WorkspaceState = {
  org: null,
};
