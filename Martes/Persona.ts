class Persona{
    private edad:number = 0;
    private nombre:string = "";

    constructor(nombre:string, edad:number, private telefono:string){
        this.edad = edad;
        this.nombre = nombre;
    }

    get g_edad(){
        return this.edad;
    }

    set g_edad(edad:number){
        this.edad = edad;
    }
}

let p:Persona = new Persona("Pepito", 20, "7728");
p.g_edad = 40;
console.log(p.g_edad);

interface Movimiento{
    (velocidadInicial:number, acc:number):number;
}

let calculo: Movimiento = function(v:number, a:number){
    return v+a;
}
console.log(calculo(2,4));

const calculo1 = function(v:number,a:number): number{
    return v+a;
}
function calculo2(v:number, a:number): number{
    return v+a;
}

const aPromise = new Promise((resolve,reject) => {
setTimeout(resolve, 5000);
});

aPromise.then(() => {
    console.log('I am printed after 5 sec');
});