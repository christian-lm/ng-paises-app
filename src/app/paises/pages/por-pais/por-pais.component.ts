import {Component} from '@angular/core';
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  constructor(private paisService: PaisService) {
  }

  termino: string = '';
  hayError: boolean = false;

  /**
   * Metodo que llama al servicio de buscar paises
   */
  buscar() {
    this.hayError = false;
    console.log(this.termino);

    // Llamada al servicio de busqueda de paises
    this.paisService.buscarPais(this.termino)
      .subscribe(
        paises => {
          console.log(paises);
        },
        error => {
          this.hayError = true;
          console.log(error);
        });
  }
}
