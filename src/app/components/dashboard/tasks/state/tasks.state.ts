import { Role } from 'src/app/models/role.model';

export interface CreateTaskState{
  title: string;
  description: string;
  attachment?: string[];
  checklist?: string[];
  comments?: string[];
  priority: Priority;
  assignees?: Assignee[];
  due: Date;
  list: string;
}

export interface TaskState extends CreateTaskState {
  _id: string;
}
export interface Assignee{
  user:string;
  role:Role;
}
export enum Priority {
  CRITICAL = 'CRITICAL',
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
}
export const initialState: TaskState = {
  _id: '',
  title: '',
  description: '',
  priority: Priority.MEDIUM,
  due: new Date(),
  list: '',
};
