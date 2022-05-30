import { Component, OnInit } from '@angular/core';
import { Bicicletas } from 'src/app/models/bicicletas.model';
import { BicicletasService } from 'src/app/services/bicicletas.service';

@Component({
  selector: 'app-bicicletas-list',
  templateUrl: './bicicletas-list.component.html',
  styleUrls: ['./bicicletas-list.component.css']
})
export class BicicletasListComponent implements OnInit {
  bicicletas?: Bicicletas[];
  currentBicicletas?: Bicicletas;
  currentIndex = -1;
  ubicacion = '';
  constructor(private bicicletasService: BicicletasService) { }

  ngOnInit(): void {
    this.retrieveBicicletas();
  }
  retrieveBicicletas(): void{
    this.bicicletasService.getAll()
      .subscribe(
        data => {
          this.bicicletas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveBicicletas();
    this.currentBicicletas = undefined;
    this.currentIndex = -1;
  }
  setActiveBicicletas(bicicletas: Bicicletas, index: number): void {
    this.currentBicicletas = bicicletas;
    this.currentIndex = index;
  }
 
  searchUbicacion(): void {
    this.bicicletasService.findByUbicacion(this.ubicacion)
      .subscribe(
        data => {
          this.bicicletas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}