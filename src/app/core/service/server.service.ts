import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { resApiResource, resApiResources, resApiResourcesgallery, resApiUser, resApiUsers } from '../schema/data';
@Injectable({
  providedIn: 'root',
})
export class ServerService {

  api: string = 'http://localhost:8000/api/';

  constructor(private _http: HttpClient) {}

  getProyects(): Observable<resApiResources> {
    return this._http.get<resApiResources>(`${this.api}proyects`);
  }
  getProyect(id: number): Observable<resApiResource> {
    return this._http.get<resApiResource>(`${this.api}proyects/details/${id}`);
  }
  getProyectImages(id: number): Observable<resApiResourcesgallery> {
    return this._http.get<resApiResourcesgallery>(`${this.api}proyects/images/${id}`);
  }
  getUsers(): Observable<resApiUsers> {
    return this._http.get<resApiUsers>(`${this.api}users`);
  }
  getUser(id: number): Observable<resApiUser> {
    return this._http.get<resApiUser>(`${this.api}users/${id}`);
  }
}
