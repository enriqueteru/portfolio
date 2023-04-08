import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.scss']
})
export class PresupuestoComponent implements OnInit {
  StepConfig: any;

  ngOnInit(): void {
    this.StepConfig = [
      {
        title: '1',
        content: 'form',
        validate: 'true',
      },
      {
        title: '2',
        content: 'form',
        validate: 'true',
      },
      {
        title: '3',
        content: 'form',
        validate: 'true',
      },
    ];
  }



}
