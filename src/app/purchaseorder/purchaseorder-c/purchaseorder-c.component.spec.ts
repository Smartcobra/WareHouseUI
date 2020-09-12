import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseorderCComponent } from './purchaseorder-c.component';

describe('PurchaseorderCComponent', () => {
  let component: PurchaseorderCComponent;
  let fixture: ComponentFixture<PurchaseorderCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseorderCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseorderCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
