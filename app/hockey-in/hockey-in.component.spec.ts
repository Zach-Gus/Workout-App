import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HockeyInComponent } from './hockey-in.component';

describe('HockeyInComponent', () => {
  let component: HockeyInComponent;
  let fixture: ComponentFixture<HockeyInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HockeyInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HockeyInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
