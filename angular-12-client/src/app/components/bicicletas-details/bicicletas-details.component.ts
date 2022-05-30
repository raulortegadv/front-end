import { Component, OnInit } from '@angular/core';
import { BicicletasService } from 'src/app/services/bicicletas.service';
import { ActivatedRoute } from '@angular/router';
import { Bicicletas } from 'src/app/models/bicicletas.model';

@Component({
  selector: 'app-bicicletas-details',
  templateUrl: './bicicletas-details.component.html',
  styleUrls: ['./bicicletas-details.component.css']
})
export class BicicletasDetailsComponent implements OnInit {
  currentBicicletas: Bicicletas = {
    ubicacion: '',
    description: '',
    disponible: false,
    fechaDisponibilidad: ''
  };
  message = '';
  constructor(
    private bicicletasService: BicicletasService,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.message = '';
    this.getBicicletas(this.route.snapshot.params['id']);
  }
  getBicicletas(id: string): void {
    this.bicicletasService.get(id)
      .subscribe(
        data => {
          this.currentBicicletas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}