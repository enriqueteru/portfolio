import { Injectable } from '@angular/core';
import { menuNav } from 'src/app/core/schema/data';

@Injectable({
  providedIn: 'root',
})
export class MenuRoutesService {
  public navData: menuNav[] = [
    {
      path: 'solutions',
      name: 'Solutions',
    },
    {
      path: 'team',
      name: 'Team',
    },
    {
      path: 'resources',
      name: 'Resources',
    },
    {
      path: 'contact',
      name: 'Contact',
    },
  ];
}
