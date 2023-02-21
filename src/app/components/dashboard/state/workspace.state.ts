import { OrgsState } from '../orgs/state/orgs.state';

export interface WorkspaceState {
  workspace: OrgsState;
}
export const initialState: WorkspaceState = {
  workspace: { orgs: [] },
};
