import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojisMadPusherComponent } from './emojis-mad-pusher.component';

describe('EmojisMadPusherComponent', () => {
  let component: EmojisMadPusherComponent;
  let fixture: ComponentFixture<EmojisMadPusherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojisMadPusherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojisMadPusherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
