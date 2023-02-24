import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardbyidComponent } from './boardbyid.component';

describe('BoardbyidComponent', () => {
  let component: BoardbyidComponent;
  let fixture: ComponentFixture<BoardbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardbyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
