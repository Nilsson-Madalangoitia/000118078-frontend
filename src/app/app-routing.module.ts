import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {LayoutComponent} from "./core/layout/layout.component";
import {RegistrarCentroComponent} from "./componentes/registrar-centro/registrar-centro.component";
import {ListarCentrosComponent} from "./componentes/listar-centros/listar-centros.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'listar',
        component: ListarCentrosComponent
      },
      {
        path: 'registrar',
        component: RegistrarCentroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
