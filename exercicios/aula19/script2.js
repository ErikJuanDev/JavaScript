
// Fabrica de bolo
class Bolo{
    constructor(valor1, valor2, valor3) {
        this.Sabor = valor1
        this.Cor = valor2
        this.Tema = valor3
    }
    assou() {
        return "O bolo de " + this.Sabor + " assou!"
    }
}

//pedido de bolo

const Morango = new Bolo("morango", "Rosa", "Barbie")

console.log(Morango)
console.log(Morango.assou());

const chocolate = new Bolo("chocolate", "Marrom", "Moana")

console.log(chocolate)
console.log(chocolate.assou())