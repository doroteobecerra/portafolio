let nombre = "alejandro es un developer"

console.log(nombre.length)

const number1 = 2


if(number1 % 2 != 0){
    console.log("El numero es impar")
}else{
    console.log("El numero es par")
}

resultado = nombre.includes("developer")
if(resultado){
    console.log("Alejandro es un developer")
}else{
    console.log("Alejandro no es developer")
}
console.log(resultado)

listado = Math.min(1,2,3,4,5)



console.log(listado)


//objetos
const persona = {
    nombre: "Alejandro",
    edad : 23,
    altura : 1.70
}
persona.nombre = "Doroteo"
delete persona.edad
const {edad} = persona
console.log(persona)


//Arreglos

const numeros = [10,20,30,40]

console.table(numeros)




numeros.forEach(function(numero){
    console.log(numero)
})


//Clases

class Pruducto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }

    formatearPrecio(){
        return `El precio es: ${this.precio}`
    }
}

const producto2 = new Pruducto('macbook', 26000)

console.log(producto2.formatearPrecio())