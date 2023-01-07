import { Component, OnInit } from '@angular/core';
import {CentroTuristicoService} from "../../core/services/centro-turistico.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CentroTuristicoModel} from "../../core/models/centro-turistico.model";
import {TipoCentrosTuristicosEnum} from "../../core/enums/tipo-centros-turisticos.enum";

@Component({
  selector: 'app-registrar-centro',
  templateUrl: './registrar-centro.component.html',
  styleUrls: ['./registrar-centro.component.css']
})
export class RegistrarCentroComponent implements OnInit {
  form!: FormGroup
  tipos = TipoCentrosTuristicosEnum
  constructor(
    private centroService: CentroTuristicoService,
    private fb: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
  }
  private initializeForm() {
    this.form = this.fb.group(
      {
        'nombre': [
          null, [Validators.required]
        ],
        'tipo': [
          null, [Validators.required]
        ],
        'tarifa': [
          null, [Validators.required]
        ],
        'distanciaCentroMetros': [
          null, [Validators.required]
        ]
      }
    )
  }

  saveCentro(centro: CentroTuristicoModel) {
    this.centroService.createCentro(centro).subscribe(res => {
      if (res===true) {
        this._snackBar.open('Centro Turistico Guardado', 'Cerrar')
        this.router.navigate(['/listar'])
      }
    })
  }

}
