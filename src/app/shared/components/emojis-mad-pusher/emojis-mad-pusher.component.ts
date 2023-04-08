import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emojis-mad-pusher',
  templateUrl: './emojis-mad-pusher.component.html',
  styleUrls: ['./emojis-mad-pusher.component.scss'],
})
export class EmojisMadPusherComponent {
  ESCAPE_KEYCODE = 'Escape';
  MSG_ALERT = '';
  x: number = 0;
  y: number = 0;
  stamps: any = [];
  emojis: any = [
    '🦏',
    '😁',
    '🙃',
    '😋',
    '😌',
    '😍',
    '😻',
    '🫰',
    '🤟',
    '👌',
    '🤌',
    '🖖',
    '🤙',
  ];

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    const ESCAPE_KEY = 'Escape';
    if (event.key === ESCAPE_KEY) {
      this.stamps = [];
      this.MSG_ALERT = '';
    }
  }

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event) {
        this.stamps = [];
      }
    });
  }

  mouseMoved(event: MouseEvent) {
    this.x = event.pageX - 50;
    this.y = event.pageY - 100;
  }

  randomStiker(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  doMagic(event: MouseEvent) {
    const element = document.elementFromPoint(event.clientX, event.clientY);
    if (element && element.classList.contains('no-sticker')) {
      return;
    }
    let position = {
      x: this.x,
      y: this.y,
      emoji: '',
    };

    position.emoji = this.emojis[this.randomStiker(0, this.emojis.length)];
    this.stamps = [...this.stamps, position];

    // if (this.stamps.length >= 5 || this.stamps.length >= 15) {
    //   this.MSG_ALERT = 'Pulsa "esc" para borrar los emojis';
    //   setTimeout(() => (this.MSG_ALERT = ''), 10000);
    // }

    if (this.stamps.length >= 5) {
      this.MSG_ALERT = 'Pulsa "esc" para borrar los emojis';
    }
    return this.stamps;
  }

  keyPress(event: KeyboardEvent) {
    console.log(event);
  }
}
