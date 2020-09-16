import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnCComponent } from './grn-c.component';

describe('GrnCComponent', () => {
  let component: GrnCComponent;
  let fixture: ComponentFixture<GrnCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
