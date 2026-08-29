import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoIoTwoListComponent } from './todo-io-two-list.component';

describe('TodoIoTwoListComponent', () => {
  let component: TodoIoTwoListComponent;
  let fixture: ComponentFixture<TodoIoTwoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoIoTwoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoIoTwoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
