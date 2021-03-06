/*
===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(
        public nombre:     string,
        public direccion:  string,
    ) {}
}

class Heroe extends PersonaNormal {
    // public alterEgo:   string;
    // public edad:       number;
    // public nombreReal: number;

    // constructor(alterEgo: string, edad: number) {
    //     this.alterEgo = alterEgo;
    //     this.edad = edad;
    // }

    constructor(
        public alterEgo:    string,
        public edad:        number,
        public nombreReal:  string,
    ) {
        super(nombreReal, 'New York USA');
    }
}

const ironman = new Heroe('Ironman', 45, 'Tony');
console.log(ironman);