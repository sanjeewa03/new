import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariAgencyComponent } from './safari-agency.component';

describe('SafariAgencyComponent', () => {
  let component: SafariAgencyComponent;
  let fixture: ComponentFixture<SafariAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafariAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafariAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
