import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdTwoIoFormComponent } from './std-two-io-form.component';

describe('StdTwoIoFormComponent', () => {
  let component: StdTwoIoFormComponent;
  let fixture: ComponentFixture<StdTwoIoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdTwoIoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdTwoIoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
