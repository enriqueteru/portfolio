import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  public title: string = "¿Hablamos?"
  public description: string = "Trabajar juntos hacia el futuro que tu organización se merece"
  public background: string = "#7946f7"
  constructor() { }

  ngOnInit(): void {
  }

}
