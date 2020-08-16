//Var, Let e Const 
//Abordaremos VAR por enquanto

var nome = 'Lucas'
var idade = 20
var possuiFaculdade = true

console.log(nome, idade, possuiFaculdade); // Lucas 20 true

var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;

console.log(precoTotal); //100

//Utilizei a vírgula para criar mais de uma variável, sem repetir a palavra chave var.
var sobreNome = 'Xavier',
    cidade = 'São Paulo'

console.log(sobreNome, cidade); // Xavier São Paulo

var semDefinir
console.log(semDefinir) // undefined

//Exemplos 

// Inválido
// var §nome;
// var function;
// var 1possuiFaculdade;

// Válido
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;

console.log(nome);
var nome = 'Lucas';
// Retorna undefined

var profissao = 'Dev Front End';
console.log(profissao);
// Retornar Dev Front End

//MUDAR O VALOR ATRIBUÍDO
//Var, Let e Const
var idade = 28;
idade = 29;

let preco = 50;
preco = 25;

const possuiFaculdade = true;
possuiFaculdade = false;
// Retorna um erro


//EXERCÍCIOS
// Declarar uma variável com o seu nome
var nome = 'Lucas';

// Declarar uma variável com a sua idade
var idade = 20
    // Declarar uma variável com a sua comida
    // favorita e não atribuir valor
var comida

// Atribuir valor a sua comida favorita
comida = 'Café'

// Declarar 5 variáveis diferentes sem valores
var Nome, Idade, sobreNome, Cidade, corPreferida