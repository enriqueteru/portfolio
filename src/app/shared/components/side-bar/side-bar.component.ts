import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements OnInit {

  //public isOpen?: boolean;
  public isOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }



 Open(value: boolean){
   console.log(value)
 }


  Close(){
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
  }

}
