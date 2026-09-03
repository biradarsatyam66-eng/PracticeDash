import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdThreeIoFormComponent } from './std-three-io-form.component';

describe('StdThreeIoFormComponent', () => {
  let component: StdThreeIoFormComponent;
  let fixture: ComponentFixture<StdThreeIoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdThreeIoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdThreeIoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
