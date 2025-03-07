import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalChecklistComponent } from './final-checklist.component';

describe('FinalChecklistComponent', () => {
  let component: FinalChecklistComponent;
  let fixture: ComponentFixture<FinalChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalChecklistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
