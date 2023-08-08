import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassServicesComponent } from './mass-services.component';

describe('MassServicesComponent', () => {
  let component: MassServicesComponent;
  let fixture: ComponentFixture<MassServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MassServicesComponent]
    });
    fixture = TestBed.createComponent(MassServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
