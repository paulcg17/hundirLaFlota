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
    if(this.confirmacionDisparo(x,y)){
      this.tableroP[x][y].url = "img/cruz.png"; 
    }else{
      this.tableroP[x][y].url = "img/circulo.png";
    }
  }

  confirmacionDisparo(n1: number, n2: number, barcosEnemigos?: Barco[]) {
    let tocado = false;
    for (let i=0; i < this.barcosEnemigos.length; i++){
      if (this.barcosEnemigos[i].coordBarco[[n1][n2]]) {
      delete this.barcosEnemigos[i].coordBarco[[n1][n2]]
      tocado = true;
    }
    this.verificarMuerte(this.barcosEnemigos[i]);
    }
    return tocado;
  }

  verificarMuerte(barco: Barco) {
    if(barco.coordBarco.length==0 || barco.coordBarco.length==null){
      barco.estado=true;
      this.finDelJuego();
    }
    
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
