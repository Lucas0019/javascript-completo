// Construtores nativos

// Objetos, Funções, Números, Strings e outros tipos de dados 
// são criados utilizando construtores. 
// Esses construtores possuem um protótipo com propriedades e métodos, 
// que poderão ser acessadas pelo tipo de dado.

const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;


// É possível acessar a função do protótipo

const list = document.querySelectorAll('li')

// transformar em array
// Fazemos isso quando queremos trabalhar com algum metodo especifico do array
const listIsArray = Array.prototype.slice.call(list)


// Método do Objeto vs Protótipo
// Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo.

Array.prototype.slice.call(list);
Array.from(list); // Metodo novo ES6+

// Retorna uma lista com os métodos / propriedades
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade
}


const pessoa = new Pessoa('Lucas', 22)

Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);

// dado.constructor.name, retorna o nome do construtor;



// Entenda o Que está Sendo Retornado
// Os métodos e propriedades acessado com o . 
// são referentes ao tipo de dados que é retornado antes desse .


const Carro = {
  
  marca: 'Ford',
  preco: 2000,

  acelerar() {
    return true;
  }
}

Carro // Object
Carro.marca // String
Carro.preco // Number
Carro.acelerar // Function
Carro.acelerar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String
