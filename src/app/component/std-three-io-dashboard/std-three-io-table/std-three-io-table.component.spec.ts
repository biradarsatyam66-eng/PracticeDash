import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdThreeIoTableComponent } from './std-three-io-table.component';

describe('StdThreeIoTableComponent', () => {
  let component: StdThreeIoTableComponent;
  let fixture: ComponentFixture<StdThreeIoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdThreeIoTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdThreeIoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
