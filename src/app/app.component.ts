import { Component, OnChanges} from '@angular/core';
import { MenuOpenerService } from './core/service/menu-opener.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
 public open? :boolean;

  constructor(private menu: MenuOpenerService){
  this.open = this.menu.isOpen;
  }
}

