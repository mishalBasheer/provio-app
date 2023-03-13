import { createReducer, on } from '@ngrx/store';
import { TaskState } from '../tasks/state/tasks.state';
import {
  createNewBoard,
  createNewList,
  createNewProject,
  createNewTask,
  loadBoard,
  moveTasksInList,
  setOrgData,
  transferListItem,
  updateTask,
} from './workspace.action';
import { initialState } from './workspace.state';

const _workspaceReducer = createReducer(
  initialState,
  on(setOrgData, (state, action) => {
    return {
      ...state,
      org: action.org,
    };
  }),
  on(createNewProject, (state, action) => {
    console.log(action);

    if (state.org?.projects) {
      return {
        ...state,
        org: {
          ...state.org,
          projects: [...state.org.projects, action.project],
        },
      };
    }
    return {
      ...state,
    };
  }),
  on(createNewBoard, (state, action) => {
    if (state.org?.projects) {
      const updatedProjects = state.org.projects.map((el) => {
        if (el._id == action.project) {
          if (el.boards) {
            return {
              ...el,
              boards: [...el.boards, action.board],
            };
          }
        }
        return el;
      });

      return {
        ...state,
        org: {
          ...state.org,
          projects: updatedProjects,
        },
      };
    }
    return {
      ...state,
    };
  }),
  on(loadBoard, (state, action) => {
    const board = state.org?.projects
      ?.find((project) => {
        return project._id === action.projectid;
      })
      ?.boards?.find((board) => {
        return board._id === action.boardid;
      });

    if (board) {
      return {
        ...state,
        board,
      };
    }
    return {
      ...state,
    };
  }),

  //there was an error before because of the inproper maping and type error
  //check whether the mapping is correct or not
  on(moveTasksInList, (state, action) => {
    const lists = state.board?.list?.map((list, index) => {
      if (index === action.currentList && list.task) {
        const listTask = swapArrayElements(
          list.task,
          action.previousIndex,
          action.currentIndex
        );
        return {
          ...list,
          task: listTask,
        };
      }
      return list;
    });
    if (state.board?.list && lists) {
      return {
        ...state,
        board: { ...state.board, list: [...lists] },
      };
    }
    return {
      ...state,
    };
  }),
  on(transferListItem, (state, action) => {
    const taskToTransfer =
      state.board?.list?.[action.previousList]?.task?.[action.previousIndex];
    const lists = state.board?.list?.map((list, index) => {
      if (index === action.previousList) {
        const tasks: TaskState[] | undefined = list.task?.filter(
          (task, index) => index !== action.previousIndex
        );
        if (tasks)
          return {
            ...list,
            task: [...tasks],
          };
      }
      if (index === action.currentList && taskToTransfer) {
        if (list.task) {
          return {
            ...list,
            task: [...list.task, { ...taskToTransfer }],
          };
        }
      }
      return list;
    });
    if (state.board?.list && lists) {
      return {
        ...state,
        board: { ...state.board, list: [...lists] },
      };
    }
    return {
      ...state,
    };
  }),
  //create new task in list
  on(createNewTask, (state, action) => {
    const newTask = action.task;
    const lists = state.board?.list?.map((element) => {
      if (element._id === action.task.list && element.task) {
        return {
          ...element,
          task: [...element.task, newTask],
        };
      }
      return element;
    });
    if (state.board?.list && lists) {
      return {
        ...state,
        board: { ...state.board, list: [...lists] },
      };
    }
    return {
      ...state,
    };
  }),
  //create new list in board
  on(createNewList, (state, action) => {
    const newList = action.list;
    if (newList && state.board?.list) {
      return {
        ...state,
        board: { ...state.board, list: [...state.board.list, newList] },
      };
    }
    return {
      ...state,
    };
  }),
  //update task
  on(updateTask, (state, action) => {
    const updatedTask = action.task;
    const lists = state.board?.list?.map((element) => {
      if (element._id === action.task.list && element.task) {
        const newTaskArray = element.task.map((task) => {
          if (task._id === updatedTask._id) {
            return updatedTask;
          }
          return task;
        });
        return {
          ...element,
          task: newTaskArray,
        };
      }
      return element;
    });
    if (state.board?.list && lists) {
      return {
        ...state,
        board: { ...state.board, list: [...lists] },
      };
    }
    return {
      ...state,
    };
  })
);
function swapArrayElements(arr: TaskState[], index1: number, index2: number) {
  // Create a new array to avoid mutating the original array
  const result = [...arr];

  // Swap the elements at the given indices
  [result[index1], result[index2]] = [result[index2], result[index1]];

  return result;
}

export function WorkspaceReducer(state: any, action: any) {
  return _workspaceReducer(state, action);
}
