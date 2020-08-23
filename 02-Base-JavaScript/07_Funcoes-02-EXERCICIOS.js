// Crie uma função para verificar se um valor é Truthy (True)
function maiorIdade(idade) {
    if (idade >= 18) {
        return 'Maior de idade: ' + true;
    } else {
        return 'Menor de idade: ' + false;
    }
}

console.log(maiorIdade(15)); //False
console.log(maiorIdade(20)); //True

//Origamid

function isTrue(dado) {
    return !!dado;
}

var eTrue = isTrue('Texto');
console.log(eTrue); //True

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
    return lado * 4
}

console.log('O perimetro do quadrado é: ' + perimetro(2)); //8

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    var nome = 'Lucas oos Santos '
    var sobrenome = 'Xavier'
    return nome + sobrenome;
}

console.log('Nome completo: ' + nomeCompleto());

//Origamid
function nomeInteiro(N, S) {
    return `$ {N} ${S}`;
}

console.log('Lucas', 'Xavier');


// Crie uma função que verifica se um número é par
function ePar(num) {
    if (num % 2 === 0) {
        return 'É par'
    } else if (num % 2 === 1) {
        return 'É impar'
    } else {
        'Insira um numero'
    }
}


console.log(ePar(4)); // Par
console.log(ePar(3)); //impar
console.log(ePar(7)); //impar

//origamid
function isEven(numero) {
    var modulo = numero % 2;
    if (modulo === 0) {
        return true;
    } else {
        return false;
    }
}

console.log('Correção ORIGAMID: ' + isEven(4))
console.log('Correção ORIGAMID: ' + isEven(3))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDados(param) {
    console.log(typeof param);
}

tipoDados(1) //Number
tipoDados('Sou um texto') //String
tipoDados(true) //boolean
tipoDados() //undefined
tipoDados(null) //Object
tipoDados(Symbol()) //symbol

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
// addEventListener('scroll', function() {
//     console.log('Lucas dos Santos Xavier');
// });
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima



// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;

}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}


console.log(jaVisitei(20));
console.log(precisoVisitar(30));