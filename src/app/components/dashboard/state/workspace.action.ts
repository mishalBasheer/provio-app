import { createAction, props } from '@ngrx/store';
import { BoardState } from '../boardbyid/state/board.state';
import { OrgState } from '../orgs/state/orgs.state';
import {
  CreateListState,
  ListState,
  ProjectState,
} from '../projects/state/projects.state';
import { CreateTaskState, TaskState } from '../tasks/state/tasks.state';

export const REQUEST_ORG_DATA = '[workspace] request org data';
export const SET_ORG_DATA = '[workspace] set org data';
export const START_CREATE_NEW_PROJECT = '[workspace] start create new project';
export const CREATE_NEW_PROJECT = '[workspace] create new project';
export const START_CREATE_NEW_BOARD = '[workspace] start create new board';
export const CREATE_NEW_BOARD = '[workspace] create new board';
export const START_CREATE_NEW_TASK = '[workspace] start create new task';
export const CREATE_NEW_TASK = '[workspace] create new task';
export const START_UPDATE_TASK = '[workspace] start update new task';
export const UPDATE_TASK = '[workspace] update new task';
export const START_CREATE_NEW_LIST = '[workspace] start create new list';
export const CREATE_NEW_LIST = '[workspace] create new list';

export const LOAD_BOARD = '[workspace] load current board';

export const START_MOVE_TASKS_IN_LIST = '[workspace] start move tasks in list';
export const MOVE_TASKS_IN_LIST = '[workspace] move tasks in list';
export const START_TRANSFER_LIST_ITEM = '[workspace] start transfer list item';
export const TRANSFER_LIST_ITEM = '[workspace] transfer list item';

//setting org data in the state initally
export const requestOrgData = createAction(REQUEST_ORG_DATA);
export const setOrgData = createAction(
  SET_ORG_DATA,
  props<{ org: OrgState }>()
);

//create new project
export const startCreateNewProject = createAction(
  START_CREATE_NEW_PROJECT,
  props<{ title: string; description: string }>()
);
export const createNewProject = createAction(
  CREATE_NEW_PROJECT,
  props<{ project: ProjectState }>()
);

//create new board
export const startCreateNewBoard = createAction(
  START_CREATE_NEW_BOARD,
  props<{ title: string; description: string; project: string }>()
);
export const createNewBoard = createAction(
  CREATE_NEW_BOARD,
  props<{ board: BoardState; project: string }>()
);

//create new task
export const startCreateNewTask = createAction(
  START_CREATE_NEW_TASK,
  props<{
    task: CreateTaskState;
  }>()
);
export const createNewTask = createAction(
  CREATE_NEW_TASK,
  props<{
    task: TaskState;
  }>()
);
//update new task
export const startUpdateTask = createAction(
  START_UPDATE_TASK,
  props<{
    task: TaskState;
  }>()
);
export const updateTask = createAction(
  UPDATE_TASK,
  props<{
    task: TaskState;
  }>()
);

//create new list
export const startCreateNewList = createAction(
  START_CREATE_NEW_LIST,
  props<{
    list: CreateListState;
  }>()
);
export const createNewList = createAction(
  CREATE_NEW_LIST,
  props<{
    list: ListState;
  }>()
);

//load current working board into the state
export const loadBoard = createAction(
  LOAD_BOARD,
  props<{ projectid: string; boardid: string }>()
);

//move tasks in list
export const startMoveTasksInList = createAction(
  START_MOVE_TASKS_IN_LIST,
  props<{
    boardId: string;
    currentList: number;
    previousIndex: number;
    currentIndex: number;
  }>()
);
export const moveTasksInList = createAction(
  MOVE_TASKS_IN_LIST,
  props<{
    currentList: number;
    previousIndex: number;
    currentIndex: number;
  }>()
);

//transfer list items
export const startTransferListItem = createAction(
  START_TRANSFER_LIST_ITEM,
  props<{
    boardId: string;
    previousList: number;
    currentList: number;
    previousIndex: number;
    currentIndex: number;
  }>()
);
export const transferListItem = createAction(
  TRANSFER_LIST_ITEM,
  props<{
    previousList: number;
    currentList: number;
    previousIndex: number;
    currentIndex: number;
  }>()
);
