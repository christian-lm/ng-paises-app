import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pais} from "../interfaces/pais.interface";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set('fields', 'name,cca2,capital,flags,population')
  }

  constructor(private http: HttpClient) {
  }

  /**
   * Metodo para la busqueda de paises por nombre Pais
   * @param query
   */
  buscarPais(query: string): Observable<Pais[]> {
    const url = `${this.apiURL}/name/${query}`;

    return this.http.get<Pais[]>(url, {params: this.httpParams});

    /*.pipe( // El pipe es para lanzar operadores RXJS
      catchError(err => of ([])) // OF genera observables
    );*/
  }

  /**
   * Metodo para la busqueda de paises por capital
   * @param query
   */
  buscarPorCapital(query: string): Observable<Pais[]> {
    const url = `${this.apiURL}/capital/${query}`;

    return this.http.get<Pais[]>(url, {params: this.httpParams});
  }

  /**
   * Metodo para la busqueda de pais por codigo
   */
  buscarPaisPorCode(query: string): Observable<Pais[]> {
    const url = `${this.apiURL}/alpha/${query}`;
    return this.http.get<Pais[]>(url);
  }

  /**
   * Metodo para la busqueda de paises por region
   */
  buscarPorRegion(query: string): Observable<Pais[]> {
    const url = `${this.apiURL}/region/${query}`;
    return this.http.get<Pais[]>(url, {params: this.httpParams});
  }

}
