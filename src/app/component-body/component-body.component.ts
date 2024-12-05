import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Barco } from '../../models/Barco';
import { Tablero } from '../../models/Tablero';
import { Coordenadas } from "../../models/Coordenadas";
@Component({
  selector: 'app-component-body',
  standalone: true,
  imports: [],
  templateUrl: './component-body.component.html',
  styleUrl: './component-body.component.sass'
})
export class ComponentBodyComponent {

    title = 'hundirLaFlota';
    cordenada1: Coordenadas = new Coordenadas(1,1);
    cordenada2: Coordenadas = new Coordenadas(1,2);
    cordenada3: Coordenadas = new Coordenadas(2,1);
    cordenada4: Coordenadas = new Coordenadas(2,2);
    cordenada5: Coordenadas = new Coordenadas(2,3);
    cordenada6: Coordenadas = new Coordenadas(3,3);
    cordenada7: Coordenadas = new Coordenadas(4,3);
    cordenada8: Coordenadas = new Coordenadas(2,3);
    cordenada9: Coordenadas = new Coordenadas(1,3);
  
    tableroP: Tablero[][] = [[new Tablero, new Tablero, new Tablero, new Tablero, new Tablero], [new Tablero, new Tablero, new Tablero, new Tablero, new Tablero]
      , [new Tablero, new Tablero, new Tablero, new Tablero, new Tablero], [new Tablero, new Tablero, new Tablero, new Tablero, new Tablero]
      , [new Tablero, new Tablero, new Tablero, new Tablero, new Tablero]]
    barcosEnemigos = new Array<Barco>; // ESTO ES UNA LISTA DE BARCOS ENEMIGOS.
  
    numberOfShootedCoordenadas:number = 0;
    numberOfTotalCoordenadas:number = 5;
    
    constructor() {
      this.barcosEnemigos = [
        new Barco(2, [this.cordenada1,this.cordenada2]),
        new Barco(3, [this.cordenada3,this.cordenada4,this.cordenada5]),
        new Barco(4, [this.cordenada6,this.cordenada7,this.cordenada8,this. cordenada9]),
  
        ];
    }
  
    disparo(x: number, y: number) {
      if(this.numberOfShootedCoordenadas !== this.numberOfTotalCoordenadas){
        if(!this.tableroP[x][y].disparado){
          console.log("entra")
          if(this.confirmacionDisparo(x,y)){
            this.tableroP[x][y].url = "img/cruz.png"; 
            this.numberOfShootedCoordenadas++;
            console.log(this.numberOfShootedCoordenadas+"DISPARADO")
          }else{
            this.tableroP[x][y].url = "img/circulo.png";
          }
  
          if(this.numberOfShootedCoordenadas === this.numberOfTotalCoordenadas){
            alert("HAS GANADO")
          }
        }else{
          console.log("Ya ha sido disparado")
          alert("Ya ha sido disparado")
        }
      }
    }
    
    confirmacionDisparo(n1: number, n2: number) {
      console.log("entra2")
      let tocado = false; 
      this.tableroP[n1][n2].disparado = true;
      for (let barco of this.barcosEnemigos){
        for(let i=0; i<barco.coordBarco.length;i++){
          if(barco.coordBarco[i].x==n1 && barco.coordBarco[i].y==n2){
            console.log("entra3")
            this.tableroP[n1][n2].tocado = true;        
            tocado = true; 
            console.log("dado");
          }
        }      
      }
      return tocado; 
    }
    showcasilla(n1: number, n2: number) {
      this.disparo(n1 , n2);
      console.log(n1, n2)
    }
    
    
  }
