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
var somar = "100" + 50; // 10050  Ainda é uma string
var subtracao = "100" - 50; // 50 ele ainda subtrai
var multiplicacao = "100" * "2"; // 200 ainda divide
var divisao = "Comprei 10" / 2; // NaN (Not a Number)

console.log(somar, subtracao, multiplicacao, divisao);
//É possível verificar se uma variável é NaN ou não com a função isNaN()

//isNaN
var testeNaN = "Isso é 100" / 2;
console.log(isNaN(testeNaN)); //True

var testeNaN = "100" / 2;
console.log(isNaN(testeNaN)); //False

//NaN => Not a Number
var numero = 80;
var unidade = "kg";
var peso = numero + unidade; // '80kg' Aqui é uma string
console.log(peso);

var pesoPorDois = peso / 2; // NaN (Not a Number)
console.log(pesoPorDois);


//A ORDEM IMPORTA
//Começa por multiplicação e divisão, depois por soma e subtração.
//Parênteses para priorizar uma expressão ( )

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

console.log('Resultados: ' + total1, total2, total3, total4);


//OPERADORES ARITMÉTICOS UNÁRIOS
//Mesma coisa para o decremento --x

var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

// OPERADORES ARITMÉTICOS UNÁRIOS
//O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste'; +
frase; // NaN
-
frase; // NaN

var idade = '28'; +
idade; // 28 (número)
-
idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// O - antes de um número torna ele negativo

console.log('\n');

//EXERCÍCIO
// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35
console.log(total);

// Crie duas expressões que retornem NaN
var nome = '8s'
console.log(-nome + 5); //NaN

var textoSoma = '2020' / 2
console.log(textoSoma); //NaN

// Somar a string '200' com o número 50 e retornar 250
var somaString = '200'
console.log(+somaString + 50);

// Incremente o número 5 e retorne o seu valor incrementado
var aumentaUm = 5;
console.log(aumentaUm++);
console.log(aumentaUm);

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso; // NaN (Not a Number)

console.log(pesoPorDois); //40kg