import { createReducer, on } from "@ngrx/store";
import { getAllOrgs } from "./tasks.action";
import { initialState } from "./tasks.state";

const _tasksReducer=createReducer(initialState,on(getAllOrgs,(state)=>{
    return {
        ...state
    }
}))

//want to add actions that can initialy load data
//create the data for the action
//create the effect of the action

export function tasksReducer(state: any, action: any) {
  return _tasksReducer(state, action);
}
