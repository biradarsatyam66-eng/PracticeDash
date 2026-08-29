import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoIoTwoDashboardComponent } from './todo-io-two-dashboard.component';

describe('TodoIoTwoDashboardComponent', () => {
  let component: TodoIoTwoDashboardComponent;
  let fixture: ComponentFixture<TodoIoTwoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoIoTwoDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoIoTwoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
