import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html'
})
export class BannerComponent implements OnInit {
@Input() title? : string;
@Input() description? : string;
@Input() background? : string;
@Input() fontColor? : string = "white";
  constructor() { }

  ngOnInit(): void {
  }

}
