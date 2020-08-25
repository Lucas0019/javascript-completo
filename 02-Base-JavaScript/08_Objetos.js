//Objetos :
//Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
//SINTAXE: Var nomeObjeto = {}

//Criar um objeto 
var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'



//Propriedades
var pessoa = {
    nome: 'Lucas',
    sobrenome: 'Xavier',
    idade: 20,
    possuiFaculdade: true,
}


console.log(pessoa.nome); //Lucas
console.log(pessoa.sobrenome); //Xavier
console.log(pessoa.idade); //20
console.log(pessoa.possuiFaculdade); //true


//Métodos
//É uma propriedade que possui uma função no local do seu valor.
var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado;
    },
}

console.log(quadrado.lados); // 4
console.log(quadrado.area(5)); // 25
console.log(quadrado.perimetro(5)); // 20


//Métodos
//Abreviação de area: function() {} para area() {}, no ES6+
var quadradoAbreviado = {
    lados1: 2,
    area1(lado1) {
        return lado1 * lado1;
    },
    perimetro1(lado1) {
        return this.lados1 * lado1;
    },
}

console.log(quadradoAbreviado.lados1); // 2
console.log(quadradoAbreviado.area1(6)); // 36
console.log(quadradoAbreviado.perimetro1(3)); //6


// Organizar o Código

// Objetos servem para organizar o código 
//em pequenas partes reutilizáveis.
Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi.toFixed(2)); // 3.14

console.table(quadrado)
    // Math é um objeto nativo de JavaScript.

//Já percebeu que console é um objeto e
// log() um método ?


//Dot Notation Get - PEGAR
//utilizando a notação ponto para acessar as propriedades 
var menu = {
    width: 800,
    height: 50,
    background: '#ffff'
}

var bg = menu.background;
console.log(bg); //#ffff

//Setando o objeto, mudou a cor do background
menu.background = '#000'
var bg = menu.background;
console.log(bg);

//Adicionando mais  atributos
menu.color = 'blue'
console.log(menu);
// { width: 800, height: 50, background: '#000', color: 'blue' }

menu.somaDois = function(a, b) {
    return a + b
}

console.log(menu.somaDois(2, 2)); //4



//Dot Notation Set 
//Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.
var pageConfig = {
    width: 800,
    height: 50,
    background: '#84E'
}

pageConfig.background = '#000'
console.log(pageConfig.background);

//Add Propriedades e Métodos
var euAqui = {
    width: 900,
}

euAqui.height = 50
euAqui.position = 'fixed';
console.log(euAqui);


//PALAVRA CHAVE - THIS
//this irá fazer uma referência ao próprio objeto.

var altura = 120
var configHome = {
    altura: 800,
    largura: 50,
    metadeLargura() {
        return this.largura / 2;
    }
}

console.log(configHome.metadeLargura()); //50
//Sem o this, seria 60



//Protótipo e Herança
//O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
var menu = {
    width: 800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false
    //hasOwnProperty é um método de Object