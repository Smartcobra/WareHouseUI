import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UomDataComponent } from './uom-data.component';

describe('UomDataComponent', () => {
  let component: UomDataComponent;
  let fixture: ComponentFixture<UomDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UomDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UomDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
