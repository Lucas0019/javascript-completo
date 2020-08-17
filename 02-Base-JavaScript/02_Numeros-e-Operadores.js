var idade = 20;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000
//Precisão para até 15 dígitos

console.log(idade, gols, pi, exp);


//Operadores Aritméticos
var soma = 100 + 50; // 150
var sub = 100 - 50; // 50
var multi = 100 * 2; // 200
var div = 100 / 2; // 50
var exp = 2 ** 4; // 16
var modulo = 14 % 5; // 4 (Resto da Divisão)

//Lembrando que soma + em Strings serve para concatenar
console.log(soma, sub, multi, div, exp, modulo);


//Operadores Aritméticos (Em Strings)
var somar = '100' + 50; // 10050  Ainda é uma string
var subtracao = '100' - 50; // 50 ele ainda subtrai
var multiplicacao = '100' * '2'; // 200 ainda divide
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

console.log(somar, subtracao, multiplicacao, divisao);
//É possível verificar se uma variável é NaN ou não com a função isNaN()

//isNaN
var testeNaN = 'Isso é 100' / 2;
console.log(isNaN(testeNaN)) //True

var testeNaN = '100' / 2;
console.log(isNaN(testeNaN)) //False


//NaN => Not a Number
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg' Aqui é uma string
console.log(peso);

var pesoPorDois = peso / 2 // NaN (Not a Number)
console.log(pesoPorDois);