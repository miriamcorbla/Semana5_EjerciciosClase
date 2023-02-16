"use strict";
class Persona {
    constructor(nombre, edad, telefono) {
        this.telefono = telefono;
        this.edad = 0;
        this.nombre = "";
        this.edad = edad;
        this.nombre = nombre;
    }
    get g_edad() {
        return this.edad;
    }
    set g_edad(edad) {
        this.edad = edad;
    }
}
let p = new Persona("Pepito", 20, "7728");
p.g_edad = 40;
console.log(p.g_edad);
let calculo = function (v, a) {
    return v + a;
};
console.log(calculo(2, 4));
const calculo1 = function (v, a) {
    return v + a;
};
function calculo2(v, a) {
    return v + a;
}
const aPromise = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000);
});
aPromise.then(() => {
    console.log('I am printed after 5 sec');
});
//# sourceMappingURL=Persona.js.map