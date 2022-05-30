import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBicicletasComponent } from './components/add-bicicletas/add-bicicletas.component';
import { BicicletasDetailsComponent } from './components/bicicletas-details/bicicletas-details.component';
import { BicicletasListComponent } from './components/bicicletas-list/bicicletas-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBicicletasComponent,
    BicicletasDetailsComponent,
    BicicletasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
