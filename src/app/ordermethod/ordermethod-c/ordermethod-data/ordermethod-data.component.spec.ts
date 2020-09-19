import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdermethodDataComponent } from './ordermethod-data.component';

describe('OrdermethodDataComponent', () => {
  let component: OrdermethodDataComponent;
  let fixture: ComponentFixture<OrdermethodDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdermethodDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdermethodDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
