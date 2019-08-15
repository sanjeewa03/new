import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafarisignupComponent } from './safarisignup.component';

describe('SafarisignupComponent', () => {
  let component: SafarisignupComponent;
  let fixture: ComponentFixture<SafarisignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafarisignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafarisignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
