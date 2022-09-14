import { Injectable } from '@angular/core';
import { menuNav } from 'src/app/core/schema/data';

@Injectable({
  providedIn: 'root',
})
export class MenuRoutesService {
  public navData: menuNav[] = [
    {
      path: '',
      name: 'Inicio',
    },
    {
      path: 'soluciones',
      name: 'Soluciones',
    },
    {
      path: 'equipo',
      name: 'Equipo',
    },
    {
      path: 'proyectos',
      name: 'Proyectos',
    },
    {
      path: 'contacto',
      name: 'Contacto',
    },
  ];
}
