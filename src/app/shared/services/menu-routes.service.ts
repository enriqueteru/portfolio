import { Injectable } from '@angular/core';

interface menuNav {
  path: string;
  name: string;
}
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
