import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-menu-mobile',
  templateUrl: './app-menu-mobile.component.html',
  styleUrls: ['./app-menu-mobile.component.scss'],
})
export class AppMenuMobileComponent implements OnInit {
  @Input() isOpen?: boolean;
  @Output() toogleMenuEmmiter = new EventEmitter<boolean>();
  public navData: any[] = [
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
