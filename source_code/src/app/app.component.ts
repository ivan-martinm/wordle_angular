import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Clon de Wordle usando directivas angular';
  logPulsaciones: string[] = [];

  registrarPulsacion(botonPulsado: string) {
    this.logPulsaciones.push(botonPulsado);
  }
}
