import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { MenuRoutesService } from '../../services/menu-routes.service';

@Component({
  selector: 'app-app-menu-mobile',
  templateUrl: './app-menu-mobile.component.html',
  styleUrls: ['./app-menu-mobile.component.scss'],
})
export class AppMenuMobileComponent implements OnInit {
  @Input() isOpen?: boolean;
  @Output() toogleMenuEmmiter = new EventEmitter<boolean>();
  public navData?: any;

  constructor(private _menuRoutes: MenuRoutesService, private router: Router) {}

  ngOnInit(): void {
    this.navData = this._menuRoutes.navData;
    // Get NavigationStart events
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((_) => {
        this.toogleMenuEmmiter.emit(!this.isOpen);
      });
  }

  toogleMenu() {
    this.toogleMenuEmmiter.emit(!this.isOpen);
  }
}
