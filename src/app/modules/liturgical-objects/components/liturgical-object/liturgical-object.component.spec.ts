import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LiturgicalObjectComponent} from './liturgical-object.component';

describe('LiturgicalObjectComponent', () => {
  let component: LiturgicalObjectComponent;
  let fixture: ComponentFixture<LiturgicalObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiturgicalObjectComponent]
    });
    fixture = TestBed.createComponent(LiturgicalObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
