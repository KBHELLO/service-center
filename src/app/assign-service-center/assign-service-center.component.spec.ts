import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignServiceCenterComponent } from './assign-service-center.component';

describe('AssignServiceCenterComponent', () => {
  let component: AssignServiceCenterComponent;
  let fixture: ComponentFixture<AssignServiceCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignServiceCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignServiceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
