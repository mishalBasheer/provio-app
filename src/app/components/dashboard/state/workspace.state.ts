import { BoardState } from '../boardbyid/state/board.state';
import { OrgState } from '../orgs/state/orgs.state';

export interface WorkspaceState {
  org: OrgState | null;
  board: BoardState | undefined;
}
export const initialState: WorkspaceState = {
  org: null,
  board: undefined,
};
