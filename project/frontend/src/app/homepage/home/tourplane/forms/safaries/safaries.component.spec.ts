import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariesComponent } from './safaries.component';

describe('SafariesComponent', () => {
  let component: SafariesComponent;
  let fixture: ComponentFixture<SafariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
