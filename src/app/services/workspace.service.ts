import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TaskState } from '../components/dashboard/tasks/state/tasks.state';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceService {
  constructor(private http: HttpClient) {}
  getAllTasksOfBoard(id: string) {
    return this.http.get(environment.apiUrl + `user/boards/${id}`);
  }
  getAllOrgs() {
    return this.http.get(environment.apiUrl + 'user/orgs');
  }
  getAllProjects() {
    return this.http.get(environment.apiUrl + 'user/projects');
  }
  getAllBoards() {
    return this.http.get(environment.apiUrl + 'user/boards');
  }
  createNewProject(obj: { title: string; description: string; org: string }) {
    return this.http.post(environment.apiUrl + 'user/projects', obj);
  }
  createNewBoard(obj: { title: string; description: string; project: string }) {
    return this.http.post(environment.apiUrl + 'user/boards', obj);
  }
  createList(obj: { title: string; board: string }) {
    return this.http.post(environment.apiUrl + 'user/lists', obj);
  }
  createTask(obj: TaskState) {
    return this.http.post(environment.apiUrl + 'user/tasks', obj);
  }
}
