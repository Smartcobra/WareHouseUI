import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdermethodRegisterComponent } from './ordermethod-register.component';

describe('OrdermethodRegisterComponent', () => {
  let component: OrdermethodRegisterComponent;
  let fixture: ComponentFixture<OrdermethodRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdermethodRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdermethodRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
