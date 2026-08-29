import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoIODashbordComponent } from './todo-io-dashbord.component';

describe('TodoIODashbordComponent', () => {
  let component: TodoIODashbordComponent;
  let fixture: ComponentFixture<TodoIODashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoIODashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoIODashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
