import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-steper',
  templateUrl: './steper.component.html',
  styleUrls: ['./steper.component.scss'],
})
export class SteperComponent implements OnInit {
  @Input() StepConfig: any;
  actualStep: number = 1;
  numberOfSteps?: number

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.actualStep)
    this.numberOfSteps = this.StepConfig.length;
  }

  getStepUpdated(event: number): void {
    console.log(event);
    this.actualStep = event;
  }
}
