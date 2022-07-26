import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface menuNav {
  path: string;
  name: string;
}

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  @Input() isOpen?: boolean;
  @Output() toogleMenuEmmiter = new EventEmitter<boolean>();
  public navData: menuNav[] = [
    {
      path: 'solutions',
      name: 'Solutions',
    },
    {
      path: 'team',
      name: 'Team',
    },
    {
      path: 'resources',
      name: 'Resources',
    },
    {
      path: 'contact',
      name: 'Contact',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toogleMenu() {
    this.toogleMenuEmmiter.emit(!this.isOpen);
  }
}
