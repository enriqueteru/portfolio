import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-steper-controller',
  templateUrl: './steper-controller.component.html',
  styleUrls: ['./steper-controller.component.scss'],
})
export class SteperControllerComponent implements OnInit {
  @Input() numberOfSteps?: number;
  @Input() previousStep?: number;
  @Input() isValid: boolean = true
  @Output() actualStep = new EventEmitter<number>();

  ngOnInit(): void {}
  setNextStep(step: number) : void {

    if (step >= this.numberOfSteps!) {
      console.error('no more steps');
      this.actualStep.emit(step);
      return
    }
    if (!step) {
      throw new Error('step must exits');
    }
    this.actualStep.emit(step+1);
    return
  }

  setPreviousStep(step: number) :void {
    if (step  === 1 ) {
      console.error('no more steps');
      this.actualStep.emit(step);
      return
    }
    if (!step) {
      throw new Error('step must exits');
    }
    this.actualStep.emit(step-1);
    return
  }
}
