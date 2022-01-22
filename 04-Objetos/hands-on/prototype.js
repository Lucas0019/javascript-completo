// Crie uma função construtora de Pessoas, deve conter nome, sobrenome e idade
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

// Crie um método no protótipo que retorne o nome completo da pessoa
Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

const lucas = new Pessoa('Lucas', 'Xavier', 21)

// Liste os métodos acessados por dados criados com NodeList,
// HTMLCollection, Document

// Obeject.getOwnPropertyNames(NodeList.prototype)
// Obeject.getOwnPropertyNames(HTMLCollection.prototype)
// Obeject.getOwnPropertyNames(Document.prototype)



// Liste os construtores dos dados abaixo
const tagLi = document.querySelector('li');

tagLi; // HTMLELement
tagLi.click; // Function
tagLi.innerText; // string
tagLi.value; // Number
tagLi.hidden; // Boolean
tagLi.offsetLeft; // Number
tagLi.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
