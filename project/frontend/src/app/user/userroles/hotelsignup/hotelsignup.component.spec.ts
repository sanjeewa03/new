import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsignupComponent } from './hotelsignup.component';

describe('HotelsignupComponent', () => {
  let component: HotelsignupComponent;
  let fixture: ComponentFixture<HotelsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
