import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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
  buscarPais(query: string): Observable<any> {
    const url = `${this.apiURL}/name/${query}`;

    return this.http.get(url);
  }

}
