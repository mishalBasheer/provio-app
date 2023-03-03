import { ListState } from '../../projects/state/projects.state';

export interface BoardState {
  _id: string;
  title: string;
  description: string;
  project: string;
  list?: ListState[];
}

