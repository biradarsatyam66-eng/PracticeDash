import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdTwoIoListComponent } from './std-two-io-list.component';

describe('StdTwoIoListComponent', () => {
  let component: StdTwoIoListComponent;
  let fixture: ComponentFixture<StdTwoIoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdTwoIoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdTwoIoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
