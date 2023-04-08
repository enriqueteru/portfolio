import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { resApiResource} from 'src/app/core/schema/data';
import { ServerService } from 'src/app/core/service/server.service';

@Injectable({ providedIn: 'root' })
export class ResourceResolverService implements Resolve<resApiResource> {
  constructor(private _ss: ServerService) {}

  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<resApiResource> {
    const searchTerm: string = route.paramMap.get('id')!;
    return this._ss.getProyect(Number(searchTerm));
  }
}

