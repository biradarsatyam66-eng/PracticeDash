import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdCrudIoDashbordComponent } from './std-crud-io-dashbord.component';

describe('StdCrudIoDashbordComponent', () => {
  let component: StdCrudIoDashbordComponent;
  let fixture: ComponentFixture<StdCrudIoDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdCrudIoDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdCrudIoDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
