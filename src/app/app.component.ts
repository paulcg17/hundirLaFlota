import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Barco} from '../models/Barco';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {

  title = 'hundirLaFlota';

  disparosTotales= new Array<String>;
  barcosEnemigos=new Array<Barco>;
  

  confirmacionDisparo(coord:String){
    let index: number = 0;
    let confirmDeath : boolean=false;
    for(let barco of this.barcosEnemigos){
      index = barco.coord.indexOf(coord);
      if(index!=-1){
        barco.coord.splice(index,1);
      }
      confirmDeath=this.verificarMuerte(barco);
      if(confirmDeath){
        barco.estado=true;
      }
    }  
  }

  verificarMuerte(barco:Barco){
    if(barco.coord.length==0){
      return true;
    }
    else{
      return false;
    }
  }

  finDelJuego(){
    let contador: number = 0;
    for(let barco of this.barcosEnemigos){
      if(barco.estado){
        contador++;
      }
    }
    if(contador==this.barcosEnemigos.length){
      alert("JUEGO FINALIZADO");
    }
  }

  showcasilla(id:any) {     
    console.log(id);
}
}
