import { Role } from 'src/app/models/role.model';

export interface TaskState {
  _id: string;
  title: string;
  description: string;
  attachment?: [{ url: string }];
  checklist?: string[];
  comments?: string[];
  priority: Priority;
  assignees?: [{ user: string; role: Role }];
  due: Date;
  list: string;
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
