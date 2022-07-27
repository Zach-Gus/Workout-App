import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaxOffComponent } from './lax-off.component';

describe('LaxOffComponent', () => {
  let component: LaxOffComponent;
  let fixture: ComponentFixture<LaxOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaxOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaxOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
