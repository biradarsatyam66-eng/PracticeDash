import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdCrudComponent } from './std-crud.component';

describe('StdCrudComponent', () => {
  let component: StdCrudComponent;
  let fixture: ComponentFixture<StdCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
