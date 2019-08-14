import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomadationsComponent } from './accomadations.component';

describe('AccomadationsComponent', () => {
  let component: AccomadationsComponent;
  let fixture: ComponentFixture<AccomadationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomadationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomadationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
