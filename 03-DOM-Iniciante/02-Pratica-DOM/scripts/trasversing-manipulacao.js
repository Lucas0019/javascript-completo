// Transversing - Como navegar pelo DOM, utilizando suas propriedades e métodos.
const lista = document.querySelector('.animais-lista')
const contato = document.querySelector('.contato');
const titulo = document.querySelector('.titulo');
const animais = document.querySelector('.animais');

lista.parentElement // pai
lista.parentElement.parentElement // pai do pai
lista.previousElementSibling // elemento acima
lista.nextElementSibling // Elemento abaixo

lista.children // HTMLColection com os filhos
lista.children[0] // Primeiro Fiho
lista.children[--lista.children.length] // Ultimo filho

lista.querySelector('li:last-child') // Ultimo filho
lista.querySelectorAll('li') // todas as LI's


// Element vs Node

// Element's represetam um elemento html, ou seja, uma tag. Node representa um nó, 
// e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.
// Geralmente estamos atrás de um elemento e não de qualquer node em si.


lista.previousElementSibling // elemento acima
lista.previousSibling // Node acima

lista.firstChild // primeiro node child
lista.childNodes // todos os node child


// Manipulando elementos
// É possível mover elementos no dom com métodos de Node.

  // contato.appendChild(lista); //  move a lista para o final do contato
  // animais.insertBefore(lista, titulo); // insere a lista antes de titulo
  // contato.removeChild(titulo); // remove titulo de contato
  // contato.replaceChild(lista, titulo); // substitui titulo por lista



// Criando elementos HTML pelo JSON  -  createElement()

const newTitle = document.querySelector('.titulo')
const ViewNewTitle = document.createElement('h1')
  ViewNewTitle.innerText = "Fire Code 🔥"
  ViewNewTitle.classList.add('fox__fire')
  newTitle.appendChild(ViewNewTitle)



// Clonar Elementos - cloneNode()

const elementTitle = document.querySelector('.titulo') // Titulo Original
const cloneElementTitle = elementTitle // Valor de titulo original
// cloneElement, continua sendo o mesmo elemento de elementTitle

//cloneNode(true) - com parametro true ele clona com os filhs
const cloneTitle = elementTitle.cloneNode(true) // Clone do Titulo
const elemntContato = document.querySelector('.contato')
elemntContato.appendChild(cloneTitle)
