import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MassServiceIconComponent} from './mass-service-icon.component';

describe('MassServiceIconComponent', () => {
  let component: MassServiceIconComponent;
  let fixture: ComponentFixture<MassServiceIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MassServiceIconComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MassServiceIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
