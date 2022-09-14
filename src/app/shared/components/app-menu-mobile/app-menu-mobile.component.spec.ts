import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMenuMobileComponent } from './app-menu-mobile.component';

describe('AppMenuMobileComponent', () => {
  let component: AppMenuMobileComponent;
  let fixture: ComponentFixture<AppMenuMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMenuMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMenuMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
