import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { dataHome, proyect } from 'src/app/core/schema/data';
import { ServerService } from 'src/app/core/service/server.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  proyects: proyect[] = [];

  constructor(private _ss: ServerService) {
    this._ss.getProyects().subscribe((data) => (this.proyects = data.proyects));
  }

  info: dataHome[] = [
    {
      title: 'title 1',
      describe: `<b>El mundo físico requieren una transformación digital, generando nuevos modelos de negocio.</b>`,
    },
    {
      title: 'title 1',
      describe: `Diseñamos, construimos, implantamos y operamos soluciones y servicios innovadores que impulsan tu negocio, a través de equipos especializados que colaboran de forma multidisciplinar.`,
      list: [
        'Auditoría técnica',
        'Digitalización de marca',
        'Diseño de Interfa de usuario - UI',
        'Diseño experiencia de usuario - UX',
        'MPV (Producto mínimo viable)',
        'Desarrollo web',
        'desarrollo aplicaciones móviles',
        'E-commerce',
      ],
    },
  ];
}
