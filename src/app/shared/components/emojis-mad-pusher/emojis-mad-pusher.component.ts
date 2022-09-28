import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emojis-mad-pusher',
  templateUrl: './emojis-mad-pusher.component.html',
  styleUrls: ['./emojis-mad-pusher.component.scss'],
})
export class EmojisMadPusherComponent implements OnInit {
  x: number = 0;
  y: number = 0;
  stamps: any = [];
  emojis: any = [
    '😀',
    '😃',
    '😄',
    '😁',
    '😆',
    '😅',
    '😂',
    '🤣',
    '😇',
    '😉',
    '😊',
    '🙂',
    '🙃',
    '😋',
    '😌',
    '😍',
    '🥰',
    '😘',
    '😗',
    '😙',
    '😚',
    '🥲',
    '🤪',
    '🥺',
    '😣',
    '😖',
    '😫',
    '😩',
    '🥱',
    '😪',
    '😮‍💨',
    '😮',
    '😱',
    '😨',
    '😰',
    '😥',
    '😓',
    '😯',
    '😦',
    '😧',
    '🥹',
    '😢',
    '😭',
    '🤤',
    '🤩',
    '😵',
    '😵‍💫',
    '🥴',
    '😲',
    '🤯',
    '🫠',
    '😈',
    '🎃',
    '😺',
    '😸',
    '😹',
    '😻',
    '🫶',
    '👐',
    '🤲',
    '🙌',
    '👍',
    '👊',
    '✊',
    '🤛',
    '🤜',
    '🤞',
    '🫰',
    '🤘',
    '🤟',
    '👌',
    '🤌',
    '🤏',
    '👈',
    '🫳',
    '🫴',
    '👉',
    '👆',
    '👇',
    '✋',
    '🤚',
    '🖐',
    '🖖',
    '👋',
    '🤙',
    '🫲',
    '🫱',
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event) {
        this.stamps = [];
      }
    });
  }

  ngOnInit(): void {}

  mouseMoved(event: MouseEvent) {
    this.x = event.pageX - 50;
    this.y = event.pageY - 100;
  }

  randomStiker(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  doMagic() {
    let position = {
      x: this.x,
      y: this.y,
      emoji: '',
    };
    position.emoji = this.emojis[this.randomStiker(0, this.emojis.length)];
    this.stamps = [...this.stamps, position];
    console.log(this.stamps);
    return this.stamps;
  }
}
