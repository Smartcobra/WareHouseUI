import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmenttypeCComponent } from './shipmenttype-c.component';

describe('ShipmenttypeCComponent', () => {
  let component: ShipmenttypeCComponent;
  let fixture: ComponentFixture<ShipmenttypeCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmenttypeCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmenttypeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
