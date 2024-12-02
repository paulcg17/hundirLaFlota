
type Coord = [number, number];

export class Barco {
    public tamano: number;
    public coordBarco: Coord[];
    public estado: boolean;

    constructor(tamano: number, coordBarco: Coord[]) {

        this.tamano = tamano;
        this.coordBarco = coordBarco;
        this.estado = false; 
    }

}