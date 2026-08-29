import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoIOFormComponent } from './todo-io-form.component';

describe('TodoIOFormComponent', () => {
  let component: TodoIOFormComponent;
  let fixture: ComponentFixture<TodoIOFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoIOFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoIOFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
