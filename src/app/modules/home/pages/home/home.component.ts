import { Component } from '@angular/core';
import { dataHome } from 'src/app/core/schema/data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  info: dataHome[] = [
    {
      title: 'title 1',
      describe:
        'El mundo físico requieren una transformación digital, generando nuevos modelos de negocio.',
    },
    {
      title: 'title 1',
      describe:
        'Diseñamos, construimos, implantamos y operamos soluciones y servicios innovadores que impulsan tu negocio, a través de equipos especializados que colaboran de forma multidisciplinar.',
    },
  ];
}
