import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseorderregisterComponent } from './purchaseorderregister.component';

describe('PurchaseorderregisterComponent', () => {
  let component: PurchaseorderregisterComponent;
  let fixture: ComponentFixture<PurchaseorderregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseorderregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseorderregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
