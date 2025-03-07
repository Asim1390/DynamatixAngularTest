import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBookletComponent } from './info-booklet.component';

describe('InfoBookletComponent', () => {
  let component: InfoBookletComponent;
  let fixture: ComponentFixture<InfoBookletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoBookletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoBookletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
