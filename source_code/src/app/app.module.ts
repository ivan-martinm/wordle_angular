import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableroComponent } from './tablero/tablero.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TecladoComponent } from './teclado/teclado.component';

@NgModule({
  declarations: [AppComponent, TableroComponent, TecladoComponent],
  imports: [BrowserModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
