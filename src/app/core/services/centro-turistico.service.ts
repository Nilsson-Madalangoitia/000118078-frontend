import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {CentroTuristicoModel} from "../models/centro-turistico.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CentroTuristicoService {
  baseUrl = environment.url + "/centros";

  constructor(
    private http: HttpClient
  ) {
  }
  public createCentro(centro: CentroTuristicoModel): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl, centro);
  }
  public listarAll(): Observable<CentroTuristicoModel[]> {
    return this.http.get<CentroTuristicoModel[]>(this.baseUrl);
  }
  public listarByTipo(tipo: string): Observable<CentroTuristicoModel[]> {
    return this.http.get<CentroTuristicoModel[]>(`${this.baseUrl}/by-tipo/${tipo}`);
  }
  public listarByTarifaLesserThan(tarifa: number): Observable<CentroTuristicoModel[]> {
    return this.http.get<CentroTuristicoModel[]>(`${this.baseUrl}/tarifa/menor-que/${tarifa}`);
  }
  public listarByTarifaGreaterThan(tarifa: number): Observable<CentroTuristicoModel[]> {
    return this.http.get<CentroTuristicoModel[]>(`${this.baseUrl}/tarifa/mayor-que/${tarifa}`);
  }
}
