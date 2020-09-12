import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseorderdataComponent } from './purchaseorderdata.component';

describe('PurchaseorderdataComponent', () => {
  let component: PurchaseorderdataComponent;
  let fixture: ComponentFixture<PurchaseorderdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseorderdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseorderdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
