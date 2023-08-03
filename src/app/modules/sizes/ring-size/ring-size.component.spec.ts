import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingSizeComponent } from './ring-size.component';

describe('RingSizeComponent', () => {
  let component: RingSizeComponent;
  let fixture: ComponentFixture<RingSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RingSizeComponent]
    });
    fixture = TestBed.createComponent(RingSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
