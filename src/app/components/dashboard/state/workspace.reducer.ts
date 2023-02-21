import { createReducer } from "@ngrx/store";
import { initialState } from "./workspace.state";

const _workspaceReducer=createReducer(initialState);

export function WorkspaceReducer(state:any,action:any){
    return _workspaceReducer(state,action);
}