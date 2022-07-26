import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  MenuState: boolean = false;
  title = 'portfolio';

  changeMenuState(toogle: boolean) {
    this.MenuState = toogle;
  }
}
