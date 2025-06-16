import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerImageComponent } from './flower-image.component';

describe('FlowerImageComponent', () => {
  let component: FlowerImageComponent;
  let fixture: ComponentFixture<FlowerImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowerImageComponent]
    });
    fixture = TestBed.createComponent(FlowerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
