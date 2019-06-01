import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedformComponent } from './customizedform.component';

describe('CustomizedformComponent', () => {
  let component: CustomizedformComponent;
  let fixture: ComponentFixture<CustomizedformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
