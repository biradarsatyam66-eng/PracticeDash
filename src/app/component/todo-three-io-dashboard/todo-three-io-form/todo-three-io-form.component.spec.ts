import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoThreeIoFormComponent } from './todo-three-io-form.component';

describe('TodoThreeIoFormComponent', () => {
  let component: TodoThreeIoFormComponent;
  let fixture: ComponentFixture<TodoThreeIoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoThreeIoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoThreeIoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
