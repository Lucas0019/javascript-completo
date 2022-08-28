// A palavra chave new é responsável por criar um novo objeto 
// baseado na função que passarmos a frente dela.

const honda = new Carro()

// 1 Cria um novo objeto
honda = {};

// 2 Define o protótipo
honda.prototype = Carro.prototype;

// 3 Aponta a variável this para o objeto
this = honda;

// 4 Executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;

// 5 Retorna o novo objeto
return honda = {
  marca: 'Marca',
  preco: 0,
}

// PARÂMETROS E ARGUMENTOS
// Podemos passar argumentos que serão utilizados no momento da criação do objeto.
function Automovel(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const fusca = new Automovel('Fusca', 4000);
const fiat = new Automovel('Fiat', 3000);

