import { Component, OnInit } from '@angular/core';
import {CentroTuristicoService} from "../../core/services/centro-turistico.service";
import {Observable} from "rxjs";
import {CentroTuristicoModel} from "../../core/models/centro-turistico.model";
import {TipoCentrosTuristicosEnum} from "../../core/enums/tipo-centros-turisticos.enum";

@Component({
  selector: 'app-listar-centros',
  templateUrl: './listar-centros.component.html',
  styleUrls: ['./listar-centros.component.css']
})
export class ListarCentrosComponent implements OnInit {

  tipos = TipoCentrosTuristicosEnum;
  menorQue: number = 0;
  selectedTarifa: number = 0;
  centros$: Observable<CentroTuristicoModel[] | null>;
  constructor(
    private centroService: CentroTuristicoService
  ) {
    this.centros$ = centroService.listarAll();
  }
  ngOnInit(): void {
  }

  listarPorTipo(tipo: string) {
    this.centros$ = this.centroService.listarByTipo(tipo);
  }

  listarPorTarifa() {
    if (this.selectedTarifa !== 0 && this.selectedTarifa !== null) {
      if (this.menorQue === 1) {
        this.centros$ = this.centroService.listarByTarifaLesserThan(this.selectedTarifa);
      } else {
        this.centros$ = this.centroService.listarByTarifaGreaterThan(this.selectedTarifa);
      }
    }

  }

}
