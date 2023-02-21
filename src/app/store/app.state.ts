import { AuthReducer } from "../components/auth/state/auth.reducer";
import { AUTH_STATE_NAME } from "../components/auth/state/auth.selector";
import { AuthState } from "../components/auth/state/auth.state";
import { orgsReducer } from "../components/dashboard/orgs/state/orgs.reducer";
import { ORG_STATE_NAME } from "../components/dashboard/orgs/state/orgs.selector";
import { OrgsState } from "../components/dashboard/orgs/state/orgs.state";
import { WorkspaceReducer } from "../components/dashboard/state/workspace.reducer";
import { WORKSPACE_STATE_NAME } from "../components/dashboard/state/workspace.selector";
import { WorkspaceState } from "../components/dashboard/state/workspace.state";
import { SharedReducer } from "./shared/shared.reducer";
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { SharedState } from "./shared/shared.state";

export interface AppState {
    [SHARED_STATE_NAME]:SharedState;
    [AUTH_STATE_NAME]:AuthState;
    [WORKSPACE_STATE_NAME]:WorkspaceState;
    [ORG_STATE_NAME]:OrgsState;
    
}
export const AppReducer={
    [SHARED_STATE_NAME]:SharedReducer,
    [AUTH_STATE_NAME]:AuthReducer,
    [WORKSPACE_STATE_NAME]:WorkspaceReducer,
    [ORG_STATE_NAME]:orgsReducer,
}
