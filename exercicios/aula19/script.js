/* 
ENTENDENDO CLASSES
    CLASSES É UM MODO DE CRIAR OBJETOS, SE COMPORTANDO COMO "FÁBRICAS".
    
    AS CLASSES NO JS, USAM O MÉTODO CHAMADO constructor() PARA A FABRICAÇÃO DOS OBJETOS
*/

class Carro{
    constructor(valor1, valor2, valor3) {
        this.Modelo = valor1
        this.Nome = valor2
        this.Ano = valor3
    }
    buzina(){
    return this.Nome + " Buzinou: bi biii"
    }
}

const Uno = new Carro("Fiat", "Uno", 2001)

console.log(Uno)
console.log(Uno.buzina());

const Strada = new Carro("Fiat", "Strada", 2020)

console.log(Strada)
console.log(Strada.buzina());

Strada.ano = 2017
console.log(Strada);