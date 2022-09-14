import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { resApiResources } from 'src/app/core/schema/data';
import { ServerService } from 'src/app/core/service/server.service';

@Injectable({ providedIn: 'root' })
export class ResourcesResolverService implements Resolve<resApiResources> {
  constructor(private _ss: ServerService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<resApiResources> {
    return this._ss.getProyects();
  }
}
