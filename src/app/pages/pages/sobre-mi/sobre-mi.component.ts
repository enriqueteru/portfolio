import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent implements OnInit {

  public title: string = "Sobre mi"
  public description: string = "Soy Enrique teruel, Consultor técnologico ubicado en San Javier, Murcia, trabajando para más de 12 países"
  public background: string = "#0055ff"
  constructor() { }

  ngOnInit(): void {
  }

}
