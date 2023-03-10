import { createFeatureSelector } from "@ngrx/store";
import { WorkspaceState } from "./workspace.state";

export const WORKSPACE_STATE_NAME='workspace';
const getWorkspaceState=createFeatureSelector<WorkspaceState>(WORKSPACE_STATE_NAME);
