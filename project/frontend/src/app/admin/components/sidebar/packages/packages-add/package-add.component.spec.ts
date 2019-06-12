import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesAddComponent } from './package-add.component';

describe('PackageAddComponent', () => {
  let component: PackagesAddComponent;
  let fixture: ComponentFixture<PackagesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
