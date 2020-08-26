import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InOfficeComponent } from './in-office.component';

describe('InOfficeComponent', () => {
  let component: InOfficeComponent;
  let fixture: ComponentFixture<InOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
