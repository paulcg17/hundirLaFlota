import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Barco } from '../models/Barco';
import { Tablero } from '../models/Tablero';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {

  title = 'hundirLaFlota';

  tableroP: Tablero[][] = [[new Tablero, new Tablero, new Tablero, new Tablero, new Tablero], [new Tablero, new Tablero, new Tablero, new Tablero, new Tablero]
    , [new Tablero, new Tablero, new Tablero, new Tablero, new Tablero], [new Tablero, new Tablero, new Tablero, new Tablero, new Tablero]
    , [new Tablero, new Tablero, new Tablero, new Tablero, new Tablero]]
  disparosTotales = new Array<String>;
  barcosEnemigos = new Array<Barco>; // ESTO ES UNA LISTA DE BARCOS ENEMIGOS.

  constructor() {
    this.barcosEnemigos = [
      new Barco(2, [[1, 1],[1,2]]),
      new Barco(3, [[2, 1],[2,2],[3,2]]),
    ];
  }

  disparo(x: number, y: number) {
    this.tableroP[x][y].url = "img/tocado.png"; //ESTO LO HA HECHO ANDER, HAY QUE MODIFICARLO.
  }

  confirmacionDisparo(n1: number, n2: number) {
    
  }

  verificarMuerte(barco: Barco) {
    // ESTO LO HACE MARIO
  }

  finDelJuego() {
    let contador: number = 0;
    for (let barco of this.barcosEnemigos) {
      if (barco.estado) {
        contador++;
      }
    }
    if (contador == this.barcosEnemigos.length) {
      alert("JUEGO FINALIZADO");
    }
  }

  showcasilla(n1: number, n2: number) {
    this.confirmacionDisparo(n1 , n2);
  }

  
}
