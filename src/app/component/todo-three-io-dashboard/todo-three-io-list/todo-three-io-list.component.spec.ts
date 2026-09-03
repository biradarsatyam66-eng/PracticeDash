import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoThreeIoListComponent } from './todo-three-io-list.component';

describe('TodoThreeIoListComponent', () => {
  let component: TodoThreeIoListComponent;
  let fixture: ComponentFixture<TodoThreeIoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoThreeIoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoThreeIoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
