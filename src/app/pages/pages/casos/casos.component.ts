import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-casos',
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.scss']
})
export class CasosComponent implements OnInit {
  public title: string = "Casos"
  public description: string = "La digitalización es un punto de inflexión necesario en el camino de cualquier empresa, estas son algunas aventuras de las que me siento muy orgulloso"
  public background: string = "#fb5607"
  constructor() { }

  ngOnInit(): void {
  }

}
