import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmenttyperegisterComponent } from './shipmenttyperegister.component';

describe('ShipmenttyperegisterComponent', () => {
  let component: ShipmenttyperegisterComponent;
  let fixture: ComponentFixture<ShipmenttyperegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmenttyperegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmenttyperegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
