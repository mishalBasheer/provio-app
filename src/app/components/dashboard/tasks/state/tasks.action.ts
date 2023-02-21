import { createAction, props } from "@ngrx/store";

export const GET_ALL_PROJECTS='[workspace page] get all projects';
export const GET_ALL_BOARDS='[workspace page] get all boards';
export const GET_BOARD_BY_ID='[workspace page] get board by id';

export const getAllProjects=createAction(GET_ALL_PROJECTS);
export const getAllBoards=createAction(GET_ALL_BOARDS);
export const getBoardById=createAction(GET_BOARD_BY_ID,props<{id:string}>);