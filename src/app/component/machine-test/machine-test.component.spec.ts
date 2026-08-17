import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineTestComponent } from './machine-test.component';

describe('MachineTestComponent', () => {
  let component: MachineTestComponent;
  let fixture: ComponentFixture<MachineTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
