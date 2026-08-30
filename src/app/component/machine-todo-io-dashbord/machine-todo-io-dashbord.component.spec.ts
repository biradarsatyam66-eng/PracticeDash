import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineTodoIoDashbordComponent } from './machine-todo-io-dashbord.component';

describe('MachineTodoIoDashbordComponent', () => {
  let component: MachineTodoIoDashbordComponent;
  let fixture: ComponentFixture<MachineTodoIoDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineTodoIoDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineTodoIoDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
