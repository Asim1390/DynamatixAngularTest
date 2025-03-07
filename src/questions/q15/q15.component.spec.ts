import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q15Component } from './q15.component';

describe('Q15Component', () => {
  let component: Q15Component;
  let fixture: ComponentFixture<Q15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Q15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Q15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
