import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaccomadationsComponent } from './addaccomadations.component';

describe('AddaccomadationsComponent', () => {
  let component: AddaccomadationsComponent;
  let fixture: ComponentFixture<AddaccomadationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaccomadationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaccomadationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
