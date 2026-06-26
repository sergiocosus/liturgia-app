import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblicalGamesComponent } from './biblical-games.component';

describe('BiblicalGamesComponent', () => {
  let component: BiblicalGamesComponent;
  let fixture: ComponentFixture<BiblicalGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiblicalGamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiblicalGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
