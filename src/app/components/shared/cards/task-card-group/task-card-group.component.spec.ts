import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardGroupComponent } from './task-card-group.component';

describe('TaskCardGroupComponent', () => {
  let component: TaskCardGroupComponent;
  let fixture: ComponentFixture<TaskCardGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCardGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCardGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
