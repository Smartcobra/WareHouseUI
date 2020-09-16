import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhuserDataComponent } from './whuser-data.component';

describe('WhuserDataComponent', () => {
  let component: WhuserDataComponent;
  let fixture: ComponentFixture<WhuserDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhuserDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhuserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
