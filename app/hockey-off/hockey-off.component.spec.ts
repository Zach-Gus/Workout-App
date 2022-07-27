import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HockeyOffComponent } from './hockey-off.component';

describe('HockeyOffComponent', () => {
  let component: HockeyOffComponent;
  let fixture: ComponentFixture<HockeyOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HockeyOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HockeyOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
