import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { dataHome } from 'src/app/core/schema/data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('clients') MyProp?: ElementRef;

  ngOnInit() {
    this.MyProp?.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
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
