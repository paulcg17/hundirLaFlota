export class Barco {
    tamano: number;
    coordBarco : number[][];
    estado: boolean;

    
    constructor(tamano: number, estado: boolean, coordBarco : number[][]) {
        this.tamano = tamano;
        this.coordBarco = coordBarco;
        this.estado = estado;
    }
}