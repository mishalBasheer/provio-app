import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TaskState } from '../components/dashboard/tasks/state/tasks.state';
import { OrgState } from '../components/dashboard/orgs/state/orgs.state';
import { Observable } from 'rxjs';
import { ProjectState } from '../components/dashboard/projects/state/projects.state';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceService {
  constructor(private http: HttpClient) {}
  getAllTasksOfBoard(id: string) {
    return this.http.get(environment.apiUrl + `user/boards/${id}`);
  }
  getAllOrgs(): Observable<{ orgs: OrgState[]; userid: string }> {
    return this.http.get<{ orgs: OrgState[]; userid: string }>(
      environment.apiUrl + 'user/orgs'
    );
  }
  getAllProjects(): Observable<{ project: ProjectState[] }> {
    return this.http.get<{ project: ProjectState[] }>(
      environment.apiUrl + 'user/projects'
    );
  }
  getAllBoards() {
    return this.http.get(environment.apiUrl + 'user/boards');
  }
  createNewProject(project: {
    title: string;
    description: string;
  }): Observable<{data:{regestered:boolean;project:ProjectState}}> {
    return this.http.post<{data:{regestered:boolean;project:ProjectState}}>(environment.apiUrl + 'user/projects', {
      title: project.title,
      description: project.description,
    });
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
  getOrgData(): Observable<{ org: OrgState }> {
    return this.http.get<{ org: OrgState }>(environment.apiUrl + 'user/org');
  }
}
