import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Barco } from '../models/Barco';
import { Tablero } from '../models/tablero';
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


  disparo(x: number, y: number) {
    this.tableroP[x][y].url = "img/tocado.png"; //ESTO LO HA HECHO ANDER, HAY QUE MODIFICARLO.
  }

  confirmacionDisparo(coord: String) {
    // ESTO LO HACE MARIO
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
    // ESTO LO HACE CALLE
  }

  crearBarcos() {
    // ESTO LO HACE CARLOS
  }
}
