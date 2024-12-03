export class Tablero{
    disparado: boolean;
    tocado : boolean;
    url: string;
    colocado : boolean; 


    constructor() {
        this.disparado = false;
        this.tocado = false;
        this.url = "img/mar.png";
        this.colocado = false; 
    }
}