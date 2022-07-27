import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerInComponent } from './soccer-in.component';

describe('SoccerInComponent', () => {
  let component: SoccerInComponent;
  let fixture: ComponentFixture<SoccerInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoccerInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoccerInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
