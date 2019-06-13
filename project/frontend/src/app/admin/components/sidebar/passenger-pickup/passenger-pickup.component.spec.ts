import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerPickupComponent } from './passenger-pickup.component';

describe('PassengerPickupComponent', () => {
  let component: PassengerPickupComponent;
  let fixture: ComponentFixture<PassengerPickupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerPickupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerPickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
