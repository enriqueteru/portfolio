import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuOpenerService {
  public isOpen?: boolean = true;

}
