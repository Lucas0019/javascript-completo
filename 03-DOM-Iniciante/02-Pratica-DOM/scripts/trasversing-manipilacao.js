// Transversing - Como navegar pelo DOM, utilizando suas propriedades e métodos.
const lista = document.querySelector('.animais-lista')

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