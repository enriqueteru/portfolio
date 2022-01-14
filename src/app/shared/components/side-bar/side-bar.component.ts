import { Component} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent {

  public isOpen: boolean = true;
  constructor() { }

  Close(){
    this.isOpen = !this.isOpen;
  }
  }

