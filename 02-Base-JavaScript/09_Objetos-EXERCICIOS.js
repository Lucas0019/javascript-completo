// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

var pessoa = {
    nome: 'Lucas dos Santos',
    sobrenome: 'Xavier',
    idade: 20,
    possuiFaculdade: true
}

// Crie um método no objeto anterior, que mostre o seu nome completo
pessoa.nomeCompleto = function() {
    return ` ${this.nome} ${this.sobrenome}`
}

console.log(pessoa.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000
console.log(carro);
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

const cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,

    //método
    latir(pessoa) {
        if (pessoa === 'homem') {
            return 'Latir';
        } else {
            return '.....';
        }
    }
}

console.log(cachorro.latir());
console.log(cachorro.latir('homem'));