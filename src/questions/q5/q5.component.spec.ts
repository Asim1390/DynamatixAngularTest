import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q5Component } from './q5.component';

describe('Q5Component', () => {
  let component: Q5Component;
  let fixture: ComponentFixture<Q5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Q5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Q5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
