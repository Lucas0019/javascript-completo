// ESCOPO DE FUNÇÃO
// Variáveis declaradas dentro de funções não são acessadas fora das mesmas.

// Escopo evita o conflito entre nomes.

function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
}

mostrarCarro(); // Fusca no console
// console.log(carro); // Erro, carro is not defined


// VARIÁVEL GLOBAL (ERRO)

// Declarar variáveis sem a palavra chave var, const ou let, 
//cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.

function mostrarCarro() {
    carro = 'Fusca';
    console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca

// 'use strict' impede isso.


//Escopo de Função (Pai)
//Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.


var comida = 'Pizza'

function comerComida() {
    var frase = `Minha comida favorita é ${comida}`
    console.log(frase);
}

comerComida() //Minha comida favorita é Pizza
console.log(comida); //Pizza


// Escopo de Bloco

// Variáveis criadas com var, vazam o bloco. 
//Por isso com a introdução do ES6 a melhor forma de declararmos uma variável é 
//utilizando const e let, pois estas respeitam o escopo de bloco.

if (true) {
    var carro = 'Ferrari';

    let cor = 'Azul'
    const animal = 'Gato';

    console.log('Dentro do bloco: ' + carro); //Ferrari
    console.log('Dentro do bloco: ' + cor); //Azul
    console.log('Dentro do bloco: ' + animal); //gato
}

console.log('Fora do bloco: ' + carro); //Ferrari
// console.log('Fora do bloco: ' + cor); //cor is not defined
// console.log('Fora do bloco: ' + animal); //animal is not defined



// Const e Let no lugar de Var
// A partir de agora vamos utilizar apenas const e let para declararmos variáveis.

if (true) {
    const formaGeometrica = 'Quadrado';
    console.log('Dentro do Bloco: ' + formaGeometrica); //Quadrado
}


// const formaGeometrica = 'Circulo';
// console.log('Fora do bloco: ' + formaGeometrica); // erro, carro is not defined


// {} cria um bloco
// Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

{
    var nome = 'Lucas';
    const ano = 2000;

    console.log('Dentro do bloco: ' + ano); //2000
}
console.log('Fora do bloco: ' + nome); // Lucas
// console.log('Fora do bloco: ' + ano); // erro ano is not defined


// For Loop

// Ao utilizar var dentro de um for loop, que é um bloco, 
//o valor do variável utilizada irá vazar e existir fora do loop.
for (var i = 0; i < 10; i++) {
    console.log(`Número ${i}`);
}

//vazou o escopo
console.log(i); // 10


for (let n = 0; n < 10; n++) {
    console.log('Dentro do bloco: ' + `Número ${n}`);
}

// console.log('Fora do bloco: ' + n);// n is not defined


// Const

// Mantém o escopo no bloco, impede a redeclaração e 
//impede a modificação do valor da variável, evitando bugs no código.

// Variáveis com valores constantes devem utilizar o const.

// const mes = 'Dezembro';
// mes = 'Janeiro'; // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor

const data = {
    dia: 11,
    mes: 'Fevereiro',
    ano: 2000,
}

console.log(data.dia = 29) // Funciona
    // data = 'Janeiro'; // erro


// Let
// Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

// let ano = 2020; // erro, redeclarou a variável

// Geralmente vamos utilizar o const.