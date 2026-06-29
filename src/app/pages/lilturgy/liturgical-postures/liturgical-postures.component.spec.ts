import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiturgicalPosturesComponent } from './liturgical-postures.component';

describe('LiturgicalPosturesComponent', () => {
  let component: LiturgicalPosturesComponent;
  let fixture: ComponentFixture<LiturgicalPosturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiturgicalPosturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiturgicalPosturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
