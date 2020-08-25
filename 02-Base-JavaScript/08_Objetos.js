//Objetos :
//Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
//SINTAXE: Var nomeObjeto = {}

//Criar um objeto 
var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'



//Propriedades
var pessoa = {
    nome: 'Lucas',
    sobrenome: 'Xavier',
    idade: 20,
    possuiFaculdade: true,
}


console.log(pessoa.nome); //Lucas
console.log(pessoa.sobrenome); //Xavier
console.log(pessoa.idade); //20
console.log(pessoa.possuiFaculdade); //true


//Métodos
//É uma propriedade que possui uma função no local do seu valor.
var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado;
    },
}

console.log(quadrado.lados); // 4
console.log(quadrado.area(5)); // 25
console.log(quadrado.perimetro(5)); // 20


//Métodos
//Abreviação de area: function() {} para area() {}, no ES6+
var quadradoAbreviado = {
    lados1: 2,
    area1(lado1) {
        return lado1 * lado1;
    },
    perimetro1(lado1) {
        return this.lados1 * lado1;
    },
}

console.log(quadradoAbreviado.lados1); // 2
console.log(quadradoAbreviado.area1(6)); // 36
console.log(quadradoAbreviado.perimetro1(3)); //6


// Organizar o Código

// Objetos servem para organizar o código 
//em pequenas partes reutilizáveis.
Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi.toFixed(2)); // 3.14

console.table(quadrado)
    // Math é um objeto nativo de JavaScript.

//Já percebeu que console é um objeto e
// log() um método ?