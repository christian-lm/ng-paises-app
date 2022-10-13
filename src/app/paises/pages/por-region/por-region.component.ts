import {Component} from '@angular/core';
import {Pais} from "../../interfaces/pais.interface";
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent {

  constructor(private paisService: PaisService) {
  }

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Pais[] = [];

  getClaseCSS(region: string): string {
    return region === this.regionActiva ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {

    if (region === this.regionActiva) {
      return;
    }

    this.regionActiva = region;
    this.paises = [];

    // Llamada al servicio de busqueda de paises
    this.paisService.buscarPorRegion(region)
      .subscribe(
        paises => {
          console.log(paises);
          this.paises = paises;
        },
        error => {
          this.paises = [];
        });
  }

}
