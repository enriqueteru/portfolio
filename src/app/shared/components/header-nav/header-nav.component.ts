import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html'
})
export class HeaderNavComponent implements OnInit {
  @Output()
  OpenMenu = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit(): void {
  }

 menuOpener(value: boolean){
   this.OpenMenu.emit(value),
   console.log(value)
 }


}
