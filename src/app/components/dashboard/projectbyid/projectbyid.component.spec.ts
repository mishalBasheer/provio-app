import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectbyidComponent } from './projectbyid.component';

describe('ProjectbyidComponent', () => {
  let component: ProjectbyidComponent;
  let fixture: ComponentFixture<ProjectbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
