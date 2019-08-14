import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristAccountComponent } from './tourist-account.component';

describe('TouristAccountComponent', () => {
  let component: TouristAccountComponent;
  let fixture: ComponentFixture<TouristAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
