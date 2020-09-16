import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnRegisterComponent } from './grn-register.component';

describe('GrnRegisterComponent', () => {
  let component: GrnRegisterComponent;
  let fixture: ComponentFixture<GrnRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
