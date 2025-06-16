import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FlowerService } from './services/flower.service';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('AppComponent – UI only', () => {
  let fixture: ComponentFixture<AppComponent>;

  const flowerServiceStub = {
    fetchFlowers: () => of({ photos: { photo: [], total: 0 } }),
    fetchFlowersByColor: () => of({ photos: { photo: [], total: 0 } }),
    fetchMoreFlowers: () => of({ photos: { photo: [], total: 0 } })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: FlowerService, useValue: flowerServiceStub }],
      schemas: [NO_ERRORS_SCHEMA],  // ignore <app-flower-image>
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();  // render template
  });

  it('should display "Total Flowers" paragraph', () => {
    const pTag = fixture.debugElement.query(
      By.css('.container-fluid.text-bg-secondary.pt-1 > p')
    );
    expect(pTag).toBeTruthy();
    expect(pTag.nativeElement.textContent).toContain('Total Flowers');
  });

  it('should render exactly 5 buttons with correct labels', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const labels = buttons.map(btn => btn.nativeElement.textContent.trim());
    expect(labels.length).toBe(5);
    expect(labels).toEqual(jasmine.arrayWithExactContents([
      'all photos',
      'red photos',
      'green photos',
      'blue photos',
      'More Flower'
    ]));
  });


});