import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdThreeIoDashboardComponent } from './std-three-io-dashboard.component';

describe('StdThreeIoDashboardComponent', () => {
  let component: StdThreeIoDashboardComponent;
  let fixture: ComponentFixture<StdThreeIoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdThreeIoDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdThreeIoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
