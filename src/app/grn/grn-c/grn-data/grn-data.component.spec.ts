import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnDataComponent } from './grn-data.component';

describe('GrnDataComponent', () => {
  let component: GrnDataComponent;
  let fixture: ComponentFixture<GrnDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
