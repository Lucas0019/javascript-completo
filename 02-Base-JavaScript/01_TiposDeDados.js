//Todos são primitivos exceto os objetos.
//Primitivos são dados imutáveis.

var nome = 'Lucas'; // String
var idade = 20; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

var name = 'Lucas';
console.log(typeof name);
// retorna string


//Concatenando Strings
var meuNome = 'Lucas dos Santos';
var sobrenome = 'Xavier';
var nomeCompleto = meuNome + ' ' + sobrenome;

console.log(nomeCompleto); //Lucas dos Santos Xavier

//Somar números com strings
var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';

console.log(frase);

//ASPAS DUPLAS e SIMPLES
'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
// "JavaScript é "super" fácil"; // Inválido

//TEMPLATE STRING
//Você deve passar expressões  variáveis dentro de ${}
var gols1 = 1000;
var frase1 = 'Romário fez ' + gols1 + ' gols';
var frase2 = `Romário fez ${gols1} gols`; // Utilizando Template String

console.log(frase1);
console.log(frase2);

//EXERCÍCIOS
// Declare uma variável contendo uma string
var cor = 'Roxo'

// Declare uma variável contendo um número dentro de uma string
var dataTexto = '2020'

// Declare uma variável com a sua idade
var idade = 20

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var Nome = 'Lucas'
var Sobrenome = 'Xavier'
var nomeInteiro = Nome + ' ' + Sobrenome;
console.log(nomeInteiro);

// Coloque a seguinte frase em uma variável: It's time
var frase = "It's time"
console.log(frase);

// Verifique o tipo da variável que contém o seu nome
console.log(typeof Nome);