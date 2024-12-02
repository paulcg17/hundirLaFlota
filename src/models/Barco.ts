import { Coordenadas } from "./Coordenadas";

export class Barco {
    public tamano: number;
    public coordBarco: Coordenadas[];
    public estado: boolean;

    constructor(tamano: number, coordBarco: Coordenadas[]) {
        this.tamano = tamano;
        this.coordBarco = coordBarco;
        this.estado = false; 
    }

}