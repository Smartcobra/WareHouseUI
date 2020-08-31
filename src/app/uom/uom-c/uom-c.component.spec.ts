import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UomCComponent } from './uom-c.component';

describe('UomCComponent', () => {
  let component: UomCComponent;
  let fixture: ComponentFixture<UomCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UomCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UomCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
