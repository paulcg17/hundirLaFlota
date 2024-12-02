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
    const longitudesBarcos = [1, 2, 3, 4]; // Longitudes de los barcos
    const tamanoTablero = this.tableroP.length; // Tamaño del tablero
   
    for (let i = 0; i < longitudesBarcos.length; i++) {
      let colocado = false;
      while (!colocado) {
        const filaInicial = Math.floor(Math.random() * tamanoTablero);
        const columnaInicial = Math.floor(Math.random() * tamanoTablero);
        const direccion = Math.floor(Math.random() * 4) + 1; // 1: arriba, 2: derecha, 3: abajo, 4: izquierda
   
        const coords = this.generarCoordenadasBarco(filaInicial, columnaInicial, longitudesBarcos[i], direccion);
        if (coords !== null && this.validarCoordenadas(coords)) {
          const barco = {
            coord: coords,
            estado: false,
          };
          this.barcosEnemigos.push(barco);
          colocado = true;
   
          // Marcar las posiciones del barco en el tablero para visualización
          for (let j = 0; j < coords.length; j++) {
            const [fila, columna] = coords[j].split(',').map(Number);
            this.tableroP[fila][columna].url = 'img/barco.png'; // Opcional: imagen de barco
          }
        }
      }
    }
  }
}
