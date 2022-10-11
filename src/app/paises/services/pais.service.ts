import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pais} from "../interfaces/pais.interface";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {
  }

  /**
   * Metodo para la busqueda de pais por parametro
   * @param query
   */
  buscarPais(query: string): Observable<Pais[]> {
    const url = `${this.apiURL}/name/${query}`;

    return this.http.get<Pais[]>(url);

    /*.pipe( // El pipe es para lanzar operadores RXJS
      catchError(err => of ([])) // OF genera observables
    );*/
  }

}
