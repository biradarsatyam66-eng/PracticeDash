import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdTwoIoDashbordComponent } from './std-two-io-dashbord.component';

describe('StdTwoIoDashbordComponent', () => {
  let component: StdTwoIoDashbordComponent;
  let fixture: ComponentFixture<StdTwoIoDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdTwoIoDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdTwoIoDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
