export interface TaskState {
  id: string;
  title: string;
  description: string;
  attachments?: [{ url: string }];
  checklist?: string[];
  comments?: string[];
  priority: Priority;
  assignees?: [{ user: string; role: Role }];
  due: Date;
  board: string;
}
export enum Priority {
  CRITICAL = 'CRITICAL',
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
}
export enum Role {
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
  MEMBER = 'MEMBER',
  OBSERVER = 'OBSERVER',
}
export const initialState: TaskState = {
  id: '',
  title: '',
  description: '',
  priority: Priority.MEDIUM,
  due: new Date(),
  board: '',
};
