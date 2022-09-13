import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteperControllerComponent } from './steper-controller.component';

describe('SteperControllerComponent', () => {
  let component: SteperControllerComponent;
  let fixture: ComponentFixture<SteperControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteperControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteperControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
