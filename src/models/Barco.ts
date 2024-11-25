export class Barco {
    tamano: number;
    posicion: boolean;
    coord = new Array<String>;
    estado: boolean;


    constructor(tamano: number, posicion: boolean, coord: Array<String>, estado: boolean) {
        this.tamano = tamano;
        this.posicion = posicion;
        this.coord = coord;
        this.estado = estado;
    }
}