import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Barco } from '../models/Barco';
import { Tablero } from '../models/Tablero';
import { Coordenadas } from "../models/Coordenadas";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {

  title = 'hundirLaFlota';
  cordenada1: Coordenadas = new Coordenadas(1,1);
  cordenada2: Coordenadas = new Coordenadas(1,2);
  cordenada3: Coordenadas = new Coordenadas(2,1);
  cordenada4: Coordenadas = new Coordenadas(2,2);
  cordenada5: Coordenadas = new Coordenadas(2,3);

  tableroP: Tablero[][] = [[new Tablero, new Tablero, new Tablero, new Tablero, new Tablero], [new Tablero, new Tablero, new Tablero, new Tablero, new Tablero]
    , [new Tablero, new Tablero, new Tablero, new Tablero, new Tablero], [new Tablero, new Tablero, new Tablero, new Tablero, new Tablero]
    , [new Tablero, new Tablero, new Tablero, new Tablero, new Tablero]]
  disparosTotales = new Array<String>;
  barcosEnemigos = new Array<Barco>; // ESTO ES UNA LISTA DE BARCOS ENEMIGOS.

  numberOfShootedCoordenadas:number = 0;
  numberOfTotalCoordenadas:number = 5;
  
  constructor() {
    this.barcosEnemigos = [
      new Barco(2, [this.cordenada1,this.cordenada2]),
      new Barco(3, [this.cordenada3,this.cordenada3,this.cordenada4]),
    ];
  }

  disparo(x: number, y: number) {
    if(this.numberOfShootedCoordenadas !== this.numberOfTotalCoordenadas){
      if(!this.tableroP[x][y].disparado){
        if(this.confirmacionDisparo(x,y)){
          this.tableroP[x][y].url = "img/cruz.png"; 
          this.numberOfShootedCoordenadas++;
        }else{
          this.tableroP[x][y].url = "img/circulo.png";
        }

        if(this.numberOfShootedCoordenadas === this.numberOfTotalCoordenadas){
          alert("HAS GANADA")
        }
      }
    }
  }

  confirmacionDisparo(n1: number, n2: number) {
    
    let tocado = false; 
    for (let i=0; i < this.barcosEnemigos.length; i++){
      for(let posiciones of this.barcosEnemigos[i].coordBarco ) {
        console.log( "1 " + posiciones)
        
          this.tableroP[n1][n2].disparado = true;
          this.tableroP[n1][n2].tocado = true;
          tocado = true; 
          console.log(tocado);
          this.verificarMuerte(this.barcosEnemigos[i])
      }
      
    }
    return tocado; 
  }

  verificarMuerte(barco: Barco) {
    if(barco.coordBarco.length==0 || barco.coordBarco.length==null){
      barco.estado=true;
      this.finDelJuego; 
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
    console.log(n1, n2)
  }

  
}
