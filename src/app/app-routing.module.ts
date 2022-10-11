import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PorPaisComponent} from "./paises/pages/por-pais/por-pais.component";
import {PorRegionComponent} from "./paises/pages/por-region/por-region.component";
import {PorCapitalComponent} from "./paises/pages/por-capital/por-capital.component";
import {VerPaisComponent} from "./paises/pages/ver-pais/ver-pais.component";

const routes: Routes = [
  {
    path: '', // ruta vacia -> localhost:9090/
    component: PorPaisComponent,
    pathMatch: 'full' // Se muestra esta pagina solo si el path es igual
  },
  {
    path: 'region', // ruta region -> localhost:9090/region
    component: PorRegionComponent,
  },
  {
    path: 'capital', // ruta capital -> localhost:9090/capital
    component: PorCapitalComponent,
  },
  {
    path: 'pais/:id', // ruta pais/id -> localhost:9090/pais/1
    component: VerPaisComponent,
  },
  {
    path: '**', // En caso de que vayas a cualquier otra ruta...
    redirectTo: '' // Redirige al pah vacio
    //component: 404Component -> En caso de URL no existe y mostrar un error personalizado
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // Le paso al modulo de rutas nuestras rutas
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
