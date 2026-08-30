import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineTodoIoListComponent } from './machine-todo-io-list.component';

describe('MachineTodoIoListComponent', () => {
  let component: MachineTodoIoListComponent;
  let fixture: ComponentFixture<MachineTodoIoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineTodoIoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineTodoIoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
