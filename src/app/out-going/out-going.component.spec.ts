import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutGoingComponent } from './out-going.component';

describe('OutGoingComponent', () => {
  let component: OutGoingComponent;
  let fixture: ComponentFixture<OutGoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutGoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutGoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
