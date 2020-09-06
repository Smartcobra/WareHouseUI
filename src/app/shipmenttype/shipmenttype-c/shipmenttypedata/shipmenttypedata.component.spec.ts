import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmenttypedataComponent } from './shipmenttypedata.component';

describe('ShipmenttypedataComponent', () => {
  let component: ShipmenttypedataComponent;
  let fixture: ComponentFixture<ShipmenttypedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmenttypedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmenttypedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
