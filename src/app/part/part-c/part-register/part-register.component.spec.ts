import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartRegisterComponent } from './part-register.component';

describe('PartRegisterComponent', () => {
  let component: PartRegisterComponent;
  let fixture: ComponentFixture<PartRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
