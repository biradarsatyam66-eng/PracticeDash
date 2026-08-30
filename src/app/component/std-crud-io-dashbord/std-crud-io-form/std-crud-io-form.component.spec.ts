import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdCrudIoFormComponent } from './std-crud-io-form.component';

describe('StdCrudIoFormComponent', () => {
  let component: StdCrudIoFormComponent;
  let fixture: ComponentFixture<StdCrudIoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdCrudIoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdCrudIoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
