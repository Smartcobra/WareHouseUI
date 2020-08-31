import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UomRegisterComponent } from './uom-register.component';

describe('UomRegisterComponent', () => {
  let component: UomRegisterComponent;
  let fixture: ComponentFixture<UomRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UomRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UomRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
