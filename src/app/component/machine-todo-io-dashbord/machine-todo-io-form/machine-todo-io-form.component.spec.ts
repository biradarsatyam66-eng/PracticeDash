import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineTodoIoFormComponent } from './machine-todo-io-form.component';

describe('MachineTodoIoFormComponent', () => {
  let component: MachineTodoIoFormComponent;
  let fixture: ComponentFixture<MachineTodoIoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineTodoIoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineTodoIoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
