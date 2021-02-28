// Dimensões e Distâncias

// Estas são propriedades e métodos dos objetos Element e HTMLElement, 
// a maioria delas são Read Only
const listaAnimais = document.querySelector('.animais-lista');

    listaAnimais.clientHeight; // height + padding
    listaAnimais.offsetHeight; // height + padding + border
    listaAnimais.scrollHeight; // height total, mesmo dentro de scroll

    listaAnimais.clientWidth; // width + padding
    listaAnimais.offsetWidth; // width + padding + border
    listaAnimais.scrollWidth; // width total, mesmo dentro de scroll


    // Distância entre o topo do elemento e o topo da página
    listaAnimais.offsetTop;

    // Distância entre o canto esquerdo do elemento
    // e o canto esquerdo da página
    listaAnimais.offsetLeft;


const rect = listaAnimais.getBoundingClientRect();
    rect.height; // height do elemento
    rect.width; // width do elemento
    rect.top; // distância entre o topo do elemento e o scroll


function viewLogger() {
    console.log(
        window.innerWidth, // width do janela
        window.outerWidth, // soma dev tools também
        window.innerHeight, // height do janela
        window.outerHeight,// soma a barra de endereço
        
        window.pageYOffset, // distância total do scroll horizontal
        window.pageXOffset, // distância total do scroll vertical
    );   
}

viewLogger()

// if(window.innerWidth < 600) {
//     console.log('Tela menor que 600px');
// }



const small = window.matchMedia('(max-width: 600px)');
small.matches ?   console.log('Tela menor que 600px') : console.log('Tela maior que 600px')


// if(small.matches) {
//   console.log('Tela menor que 600px')
// } else {
//   console.log('Tela maior que 600px')
// }
