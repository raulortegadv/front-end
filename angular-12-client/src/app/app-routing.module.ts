import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BicicletasListComponent } from './components/bicicletas-list/bicicletas-list.component';
import { BicicletasDetailsComponent } from './components/bicicletas-details/bicicletas-details.component';
import { AddBicicletasComponent } from './components/add-bicicletas/add-bicicletas.component';

const routes: Routes = [
  { path: '', redirectTo: 'bicicletas', pathMatch: 'full' },
  { path: 'bicicletas', component: BicicletasListComponent },
  { path: 'bicicletas/:id', component: BicicletasDetailsComponent },
  { path: 'add', component: AddBicicletasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
