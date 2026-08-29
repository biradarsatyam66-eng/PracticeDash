import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoIOListComponent } from './todo-io-list.component';

describe('TodoIOListComponent', () => {
  let component: TodoIOListComponent;
  let fixture: ComponentFixture<TodoIOListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoIOListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoIOListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
