import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhuserRegisterComponent } from './whuser-register.component';

describe('WhuserRegisterComponent', () => {
  let component: WhuserRegisterComponent;
  let fixture: ComponentFixture<WhuserRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhuserRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhuserRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
