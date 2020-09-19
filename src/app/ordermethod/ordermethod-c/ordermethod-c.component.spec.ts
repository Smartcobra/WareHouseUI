import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdermethodCComponent } from './ordermethod-c.component';

describe('OrdermethodCComponent', () => {
  let component: OrdermethodCComponent;
  let fixture: ComponentFixture<OrdermethodCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdermethodCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdermethodCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
