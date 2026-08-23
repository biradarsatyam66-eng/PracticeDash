import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineTodoComponent } from './machine-todo.component';

describe('MachineTodoComponent', () => {
  let component: MachineTodoComponent;
  let fixture: ComponentFixture<MachineTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
