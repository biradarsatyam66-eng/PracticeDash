import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdCrudIoListComponent } from './std-crud-io-list.component';

describe('StdCrudIoListComponent', () => {
  let component: StdCrudIoListComponent;
  let fixture: ComponentFixture<StdCrudIoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdCrudIoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdCrudIoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
