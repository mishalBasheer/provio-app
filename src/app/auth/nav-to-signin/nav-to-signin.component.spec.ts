import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavToSigninComponent } from './nav-to-signin.component';

describe('NavToSigninComponent', () => {
  let component: NavToSigninComponent;
  let fixture: ComponentFixture<NavToSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavToSigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavToSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
