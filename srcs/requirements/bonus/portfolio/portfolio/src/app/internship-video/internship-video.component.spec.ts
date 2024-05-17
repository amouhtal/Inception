import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipVideoComponent } from './internship-video.component';

describe('InternshipVideoComponent', () => {
  let component: InternshipVideoComponent;
  let fixture: ComponentFixture<InternshipVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternshipVideoComponent]
    });
    fixture = TestBed.createComponent(InternshipVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
