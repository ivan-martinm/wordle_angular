import { Component, Input, OnInit } from '@angular/core';
import { Casilla } from '../interfaces/casilla';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css'],
})
export class TableroComponent implements OnInit {
  @Input() casillas!: Casilla[][];

  coloresPorEstado = ['#FFFFFF', '#00FF50', 'yellow', 'grey'];

  aplicarEstilo(estadoCasilla: number) {
    return {
      border: '1px solid black',
      padding: '25px',
      width: '60px',
      height: '60px',
      backgroundColor: this.coloresPorEstado[estadoCasilla],
    };
  }

  constructor() {}

  ngOnInit(): void {}
}
