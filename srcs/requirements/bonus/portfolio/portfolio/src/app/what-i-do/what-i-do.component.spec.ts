import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIDoComponent } from './what-i-do.component';

describe('WhatIDoComponent', () => {
  let component: WhatIDoComponent;
  let fixture: ComponentFixture<WhatIDoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatIDoComponent]
    });
    fixture = TestBed.createComponent(WhatIDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
