import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineStdComponent } from './machine-std.component';

describe('MachineStdComponent', () => {
  let component: MachineStdComponent;
  let fixture: ComponentFixture<MachineStdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineStdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
