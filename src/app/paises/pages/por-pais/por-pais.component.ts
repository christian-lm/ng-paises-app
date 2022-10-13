import {Component} from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Pais} from "../../interfaces/pais.interface";

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  constructor(private paisService: PaisService) {
  }

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  /**
   * Metodo que llama al servicio de buscar paises
   */
  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    // Llamada al servicio de busqueda de paises
    this.paisService.buscarPais(this.termino)
      .subscribe(
        paises => {
          console.log(paises);
          this.paises = paises;
        },
        error => {
          this.hayError = true;
          this.paises = [];
        });
  }
}
