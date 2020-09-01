//Operadores de Atribuição

var x = 5
var y = 10

console.log(x += y) // x = x + y (15)
console.log(x -= y) // x = x - y (-5)
console.log(x *= y) // x = x * y (50)
console.log(x /= y) // x = x / y (0.5)

console.log(x %= y) // x = x % y (0)
console.log(x **= y) // x = x ** y (9765625)


//Função
function imprimirResultado(x, y, ) {
    console.log(x += y, x -= y, x *= y, x /= y, x %= y, x **= y);
}

imprimirResultado(5, 10) //15 -5 50 5 5 9765625
imprimirResultado(4, 8) //12 -4 32 4 4 65536


//Operador Ternário
//Abreviação de condicionais com if e else
//SINTAXE: (condição) ? verdade : Falso

var idade = 20

var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber'
console.log(podeBeber); // pode beber


//Função
function possoBeber(idade) {
    console.log((idade >= 18) ? 'Pode beber' : 'Não pode beber');
}

possoBeber(16) //Não pode beber
possoBeber(20) // pode beber


//If Abreviado
// Não é necessário abrir e fechar as chaves {} 
//quando retornamos apenas uma linha de código

var possuiFaculdade = true;

if (possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

// ou

if (possuiFaculdade)
    console.log('Possui faculdade');
else
    console.log('Não possui faculdade');


//EXERCÍCIO

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000
scroll += 500

console.log(scroll) //1500

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.

var possuiCarro = true;
var possuiCasa = true;
var darCredito;

// var atribuirCredito = (possuiCarro && possuiCasa === true) ? true : false
var atribuirCredito = (possuiCarro && possuiCasa) // && retorna o primeiro falso que achar
console.log(atribuirCredito);