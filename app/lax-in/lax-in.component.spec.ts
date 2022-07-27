import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaxInComponent } from './lax-in.component';

describe('LaxInComponent', () => {
  let component: LaxInComponent;
  let fixture: ComponentFixture<LaxInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaxInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaxInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
