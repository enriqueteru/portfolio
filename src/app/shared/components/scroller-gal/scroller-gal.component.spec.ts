import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollerGalComponent } from './scroller-gal.component';

describe('ScrollerGalComponent', () => {
  let component: ScrollerGalComponent;
  let fixture: ComponentFixture<ScrollerGalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollerGalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollerGalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
