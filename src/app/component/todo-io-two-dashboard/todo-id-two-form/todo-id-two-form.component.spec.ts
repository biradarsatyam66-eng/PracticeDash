import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoIdTwoFormComponent } from './todo-id-two-form.component';

describe('TodoIdTwoFormComponent', () => {
  let component: TodoIdTwoFormComponent;
  let fixture: ComponentFixture<TodoIdTwoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoIdTwoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoIdTwoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
