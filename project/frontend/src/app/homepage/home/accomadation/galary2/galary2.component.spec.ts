import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Galary2Component } from './galary2.component';

describe('Galary2Component', () => {
  let component: Galary2Component;
  let fixture: ComponentFixture<Galary2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Galary2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Galary2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
