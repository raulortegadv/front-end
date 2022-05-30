import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bicicletas } from '../models/bicicletas.model';

const baseUrl = 'http://localhost:8080/api/bicicletas';
@Injectable({
  providedIn: 'root'
})
export class BicicletasService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Bicicletas[]> {
    return this.http.get<Bicicletas[]>(baseUrl);
  }

  get(id: any): Observable<Bicicletas> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  findByUbicacion(ubicacion: any): Observable<Bicicletas[]> {
    return this.http.get<Bicicletas[]>(`${baseUrl}?ubicacion=${ubicacion}`);
  }
}
