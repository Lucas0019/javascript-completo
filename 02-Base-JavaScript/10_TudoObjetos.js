// TUDO É OBJETO

// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. 
//Por isso são objetos.

var nome = 'Lucas';

console.log(nome.length); // length -> lê a quantidade de caracteres , 5
console.log(nome.charAt(1)); //buscar e mostrar o carácter da posição informada ,'u'
console.log(nome.replace('cas', 'ca')); // 'Andrei' --> troca o argumento desejado, porem a variável é mantida
console.log(nome); // 'Lucas'

//Uma string herda propriedades e métodos do construtor String()


var pessoa = 'LUCAS'
var nomeMinusculo = pessoa.toLowerCase()
console.log(nomeMinusculo); //lucas


//Numeros

var altura = 1.8
var virouString = altura.toString()
console.log(virouString); // '1.8'
console.log(typeof virouString);

var arredondarDois = altura.toFixed()
console.log(arredondarDois); //2

var pi = Math.PI
console.log(pi.toFixed(2)); //3.14

//Por um breve momento o número é envolvido em um Objeto (coerção), 
//tendo acesso assim as suas propriedades e métodos


//Funções
function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1


// Elementos do DOM
{
    /* <a class = "btn" > Clique </a>

    var btn = document.querySelector('.btn');

    btn.classList.add('azul') // adiciona a classe azul
    btn.innerText; // 'Clique'
    btn.addEventListener('click', function() {
        console.log('Clicou')
    }) */
}

// Praticamente todos os efeitos com JS são feitos utilizando 
//propriedades e métodos de objetos do DOM.