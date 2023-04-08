import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { AnimationService } from '../../services/animate.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() title: string = 'This is a title';
  @Input() color: string = 'black';

  constructor(private _as: AnimationService, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this._as.animateDown(this.elementRef, '.title-animate');
  }
}
