import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BiblicalTimelinePageComponent} from './biblical-timeline-page.component';

describe('BiblicalTimelinePageComponent', () => {
  let component: BiblicalTimelinePageComponent;
  let fixture: ComponentFixture<BiblicalTimelinePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiblicalTimelinePageComponent]
    });
    fixture = TestBed.createComponent(BiblicalTimelinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
