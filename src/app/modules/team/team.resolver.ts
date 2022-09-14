import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { resApiUsers } from 'src/app/core/schema/data';
import { ServerService } from 'src/app/core/service/server.service';

@Injectable({ providedIn: 'root' })
export class TeamResolverService implements Resolve<resApiUsers> {
  constructor(private _ss: ServerService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<resApiUsers> {
    return this._ss.getUsers();
  }
}
