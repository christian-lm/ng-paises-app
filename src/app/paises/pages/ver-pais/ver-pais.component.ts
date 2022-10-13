import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService) {
  }

  ngOnInit(): void {

    // Nos suscribimos al observable de la ruta activa
    this.activatedRoute.params
      .subscribe(({id}) => {
        this.paisService.buscarPaisPorCode(id)
          .subscribe(paises => {
            let pais = paises[0];
            console.log(pais);
          });
      })
  }
}
