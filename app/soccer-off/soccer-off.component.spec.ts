import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerOffComponent } from './soccer-off.component';

describe('SoccerOffComponent', () => {
  let component: SoccerOffComponent;
  let fixture: ComponentFixture<SoccerOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoccerOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoccerOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
