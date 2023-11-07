import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiturgicalObjectsPageComponent } from './liturgical-objects-page.component';

describe('LiturgicalObjectsPageComponent', () => {
  let component: LiturgicalObjectsPageComponent;
  let fixture: ComponentFixture<LiturgicalObjectsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiturgicalObjectsPageComponent]
    });
    fixture = TestBed.createComponent(LiturgicalObjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
