import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhuserCComponent } from './whuser-c.component';

describe('WhuserCComponent', () => {
  let component: WhuserCComponent;
  let fixture: ComponentFixture<WhuserCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhuserCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhuserCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
