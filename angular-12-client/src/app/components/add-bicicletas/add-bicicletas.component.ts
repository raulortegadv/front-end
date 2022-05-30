import { Component, OnInit } from '@angular/core';
import { Bicicletas } from 'src/app/models/bicicletas.model';
import { BicicletasService } from 'src/app/services/bicicletas.service';

@Component({
  selector: 'app-add-bicicletas',
  templateUrl: './add-bicicletas.component.html',
  styleUrls: ['./add-bicicletas.component.css']
})
export class AddBicicletasComponent implements OnInit {

  bicicletas: Bicicletas = {
    ubicacion: '',
    description: '',
    disponible: false,
    fechaDisponibilidad: ''
  };
  submitted = false;
  constructor(private bicicletasService: BicicletasService) { }
  ngOnInit(): void {
  }
  saveBicicleta(): void {
    const data = {
      ubicacion: this.bicicletas.ubicacion,
      description: this.bicicletas.description,
      disponible: this.bicicletas.disponible,
      fechaDisponibilidad: this.bicicletas.fechaDisponibilidad
    };
    this.bicicletasService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newBicicletas(): void {
    this.submitted = false;
    this.bicicletas = {
      ubicacion: '',
      description: '',
      disponible: false,
      fechaDisponibilidad: ''
    };
  }
}