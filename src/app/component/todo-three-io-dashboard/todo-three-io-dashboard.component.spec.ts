import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoThreeIoDashboardComponent } from './todo-three-io-dashboard.component';

describe('TodoThreeIoDashboardComponent', () => {
  let component: TodoThreeIoDashboardComponent;
  let fixture: ComponentFixture<TodoThreeIoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoThreeIoDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoThreeIoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
