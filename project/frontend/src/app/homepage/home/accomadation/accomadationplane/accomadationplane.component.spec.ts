import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomadationplaneComponent } from './accomadationplane.component';

describe('AccomadationplaneComponent', () => {
  let component: AccomadationplaneComponent;
  let fixture: ComponentFixture<AccomadationplaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomadationplaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomadationplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
