import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariplaneComponent } from './safariplane.component';

describe('SafariplaneComponent', () => {
  let component: SafariplaneComponent;
  let fixture: ComponentFixture<SafariplaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafariplaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafariplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
