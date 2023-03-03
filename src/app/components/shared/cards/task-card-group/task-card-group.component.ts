import { Component, Input } from '@angular/core';
import { Assignee, Priority } from 'src/app/components/dashboard/tasks/state/tasks.state';

@Component({
  selector: 'app-task-card-group',
  templateUrl: './task-card-group.component.html',
  styleUrls: ['./task-card-group.component.css']
})
export class TaskCardGroupComponent {
@Input() title!:string;
@Input() _id!:string;
@Input() priority!:Priority;
@Input() assignees!:Assignee[]|undefined;
@Input() due!:Date;
@Input() checklist!:string[]|undefined;
}
