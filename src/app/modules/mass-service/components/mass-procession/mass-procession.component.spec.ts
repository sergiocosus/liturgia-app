import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassProcessionComponent } from './mass-procession.component';

describe('MassProcessionComponent', () => {
  let component: MassProcessionComponent;
  let fixture: ComponentFixture<MassProcessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MassProcessionComponent]
    });
    fixture = TestBed.createComponent(MassProcessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
