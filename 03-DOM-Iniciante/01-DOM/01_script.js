// window.alert('Eae dev')

// const href = window.location.href
// console.log(href); //'http://127.0.0.1:5500/03-DOM-Iniciante/01-DOM/'

// if (href === 'http://127.0.0.1:5500/03-DOM-Iniciante/01-DOM/') {
//     console.log(window.alert('É igual !!!'));
// } else {
//     console.log('É diferente');
// }

// document...


// Window e Document
// São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

// window.alert('Isso é um alerta');
// alert('Isso é um alerta'); // Funciona


// document.body; // Retorna o body


// h1Selecionado.classList


const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

//Selecionar uma tag html

// titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo

// const h1Selecionado = document.querySelector('h1'); // Seleciona o primeiro h1

// h1Selecionado.addEventListener('click', function() {
//     console.log('Clicou em ', h1Selecionado.innerHTML);
//     window.alert('Ok dev')
// })


//ou

const h1Selecionado = document.querySelector('h1'); // Seleciona o primeiro h1


function callbackH1() {
    console.log('Clicou em ', h1Selecionado.innerHTML);
    window.alert('Ok dev')
}

h1Selecionado.addEventListener('click', callbackH1)