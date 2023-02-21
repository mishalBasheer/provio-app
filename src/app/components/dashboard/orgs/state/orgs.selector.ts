import { createFeatureSelector } from "@ngrx/store";
import { OrgsState } from "./orgs.state";

export const ORG_STATE_NAME='org';

export const getOrgState = createFeatureSelector<OrgsState>(ORG_STATE_NAME);