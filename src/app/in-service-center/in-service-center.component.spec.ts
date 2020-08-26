import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InServiceCenterComponent } from './in-service-center.component';

describe('InServiceCenterComponent', () => {
  let component: InServiceCenterComponent;
  let fixture: ComponentFixture<InServiceCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InServiceCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InServiceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
