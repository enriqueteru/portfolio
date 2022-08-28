import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { resApiUser, resApiUsers } from '../schema/data';
@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private _http: HttpClient) {}

  getProyects(): Observable<any[]> {
    return this._http.get<any[]>('http://localhost:8000/api/proyects');
  }
  getProyect(id: number): Observable<any[]> {
    return this._http.get<any[]>(`http://localhost:8000/api/proyects/`);
  }
  getUsers(): Observable<resApiUsers> {
    return this._http.get<resApiUsers>('http://localhost:8000/api/users');
  }
  getUser(id: number): Observable<resApiUser> {
    return this._http.get<resApiUser>(`http://localhost:8000/api/users/${id}`);
  }
}
