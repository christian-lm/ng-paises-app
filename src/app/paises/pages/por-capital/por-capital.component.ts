import {Component} from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Pais} from "../../interfaces/pais.interface";

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  constructor(private paisService: PaisService) {
  }

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  placeholder: string = 'Buscar capital...';

  /**
   * Metodo que llama al servicio de buscar paises
   */
  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    // Llamada al servicio de busqueda de paises
    this.paisService.buscarPorCapital(this.termino)
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
