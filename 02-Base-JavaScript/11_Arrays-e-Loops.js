//É um grupo de valores geralmente relacionados. 
//Servem para guardarmos diferentes valores em uma única variável.
// var arrayNome = ['']

//Array
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];

console.log(videoGames[0]); // Switch
console.log(videoGames[2]); // Xbox

//MÉTODOS e Propriedades de um Array
console.log(videoGames.pop()); //Remove o ultimo item e retorna ele
console.log(videoGames.push('3DS')); //Add ao final do array
console.log(videoGames.length); //3


//For Loop
//Repetição até que uma condição o pare

//Inicio.........Condição...... .incremento
for (let numero = 0; numero <= 10; numero++) {
    console.log(numero);
}


// While Loop
// Retorna de 0 a 19 no console

let num = 0
while (num < 20) {
    console.log(num);
    // num++
    num = num + 2
}



// Arrays e Loops
// O for loop é o mais comum

let cores = ['Red', 'blue', 'Black', 'Yellow']

for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}


// Break
// O loop irá parar caso encontro e palavra break

for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);

    if (cores[i] === 'blue') {
        break; //Para o loop
    }
}


// forEach
// forEach é um método que executa uma função para cada item da Array. 
//É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

// Podemos passar os seguintes parâmetros item, index e array

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];

videoGames.forEach(function(item) {
    console.log(item);
});
// O argumento item será atribuído dinamicamente


// Não se confunda com a sintaxe
var numero = 0;
var maximo = 50;

for (; numero < maximo;) {
    console.log(numero);
    numero++;
}

// Não aconselho escrever da forma acima, mas funciona normalmente.