// prototype

// Somente na função, a propriedade prototype é um objeto adicionado a 
// uma função quando a mesma é criada.

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade
}

// funcao.prototype
// É possível adicionar novas propriedades e métodos ao objeto prototype.
Pessoa.prototype.andar = function() {
  return 'andou';
}

Pessoa.prototype.nandar = function() {
  return 'nandou';
}

const lucas = new Pessoa('Lucas', 21)

console.log(Pessoa.prototype)
console.log(lucas.prototype)


// Acesso ao Protótipo

// O objeto criado utilizando o construtor, 
// possui acesso aos métodos e propriedades do protótipo deste construtor. 
// Lembrando, prototype é uma propriedade de funções apenas.


lucas.nome;
lucas.idade;
lucas.andar();
lucas.nadar();



// proto
// O novo objeto acessa os métodos e propriedades do protótipo através 
// da propriedade __proto__. É papel da engine fazer essa busca, 
// não devemos falar com __proto__ diretamente.

// Acessam o mesmo método
// mas __proto__ não terá
// acesso ao this.nome
andre.andar();
andre.__proto__.andar();



// Herança de Protótipo

// O objeto possui acesso aos métodos e propriedades do protótipo do construtor 
// responsável por criar este objeto. O objeto abaixo possui acesso a métodos 
// que nunca definimos, mas são herdados do protótipo de Object.
Object.prototype
lucas.toString();
lucas.isPrototypeOf();
lucas.valueOf();

