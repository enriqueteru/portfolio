import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  MenuState: boolean = false;
  title = 'portfolio';

  changeMenuState(toogle: boolean) {
    this.MenuState = toogle;
  }
}
