import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q13Component } from './q13.component';

describe('Q13Component', () => {
  let component: Q13Component;
  let fixture: ComponentFixture<Q13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Q13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Q13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
