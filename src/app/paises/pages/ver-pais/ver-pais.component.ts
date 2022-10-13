import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PaisService} from "../../services/pais.service";
import {switchMap, tap} from "rxjs";
import {Pais} from "../../interfaces/pais.interface";

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService) {
  }

  pais!: Pais; // Puede ser nulo pero para typescript no

  ngOnInit(): void {

    // Nos suscribimos al observable de la ruta activa
    /*this.activatedRoute.params
      .subscribe(({id}) => {
        this.paisService.buscarPaisPorCode(id)
          .subscribe(paises => {
            let pais = paises[0];
            console.log(pais);
          });
      })*/

    // Forma alternativa para evitar dos suscribe
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.buscarPaisPorCode(id)),
        tap(console.log) // El tap recibe el producto del switchMap y pinta en consola lo que reciba
      )
      .subscribe(paises => {
        this.pais = paises[0];
      })
  }
}
