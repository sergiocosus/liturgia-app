import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassServiceComponent } from './mass-service.component';

describe('MassServiceComponent', () => {
  let component: MassServiceComponent;
  let fixture: ComponentFixture<MassServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
