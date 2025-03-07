import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q7Component } from './q7.component';

describe('Q7Component', () => {
  let component: Q7Component;
  let fixture: ComponentFixture<Q7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Q7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Q7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
