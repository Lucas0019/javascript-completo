// forEach
//O método forEach() executa uma dada função em cada elemento de um array.

// Constantemente vamos selecionar uma lista de itens do DOM.
// A melhor forma para interagirmos com os mesmos é utilizando o método forEach

const imgs = document.querySelectorAll('img')

imgs.forEach(function(item, index, array) {
    // console.log(item, index, array);
})



// forEach e Array

// forEach é um método de Array, alguns objetos array-like possuem este método. 
//Caso não possua, o ideal é transformá-los em uma array
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos); //transformando a variável titulos em uma array

console.log(titulos);
console.log(titulosArray);

titulosArray.forEach(function(item) {
    // console.log(item);
});



//Arrow Function

//Funcão expression
let somaDois = function(a) {
    console.log(2 + a);
}

somaDois(2) //4
somaDois(8) //10

//Arrow 
let somaDoisArrow = (b) => {
    console.log(2 + b);
}

somaDoisArrow(10) //12



//Arrow Function - Animais Fantasticos
const imgsArrow = document.querySelectorAll('img');

imgsArrow.forEach((item) => {
    console.log(item);
});



//Particularidades 


const imgsUnico = document.querySelectorAll('img');

// argumento único não precisa de parênteses
imgsUnico.forEach(item => {
    console.log(item);
});


// multiplos argumentos precisam de parênteses
imgsMulti.forEach((item, index) => {
    console.log(item, index);
});


// sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
imgsSemArg.forEach(() => {
    console.log(i++);
});



//Mesmo código
let i = 0
imgLinha.forEach(function(item) {
    console.log(i++)
})

//em uma linha - não precisa das chaves {}
imgLinha.forEach((item) => console.log(i++))