import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuRoutesService } from '../../services/menu-routes.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  @Input() isOpen?: boolean;
  @Output() toogleMenuEmmiter = new EventEmitter<boolean>();

  constructor(private _menuRoutes: MenuRoutesService) {}
  public navData?: any;
  ngOnInit(): void {
    this.navData = this._menuRoutes.navData;
  }

  toogleMenu() {
    this.toogleMenuEmmiter.emit(!this.isOpen);
  }
}
