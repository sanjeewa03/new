import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Galary1Component } from './galary1.component';

describe('Galary1Component', () => {
  let component: Galary1Component;
  let fixture: ComponentFixture<Galary1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Galary1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Galary1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
