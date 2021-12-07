// Um objeto criado com uma Constructor, não irá influenciar em 
// outro objeto criado com a mesma Constructor.

function Dom() {

  this.seletor = 'li';
  const element = document.querySelector(this.seletor);

  this.ativo = function() {
    element.classList.add('ativo');
  };
  
}

const lista = new Dom();
lista.seletor = 'ul';
lista.ativo();

const lastLi = new Dom();
lastLi.seletor = 'li:last-child';
lastLi.ativo();
