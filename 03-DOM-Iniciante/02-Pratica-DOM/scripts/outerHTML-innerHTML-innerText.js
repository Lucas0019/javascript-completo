// outerHTML, innerHTML e innerText
// element.innerText = 'New Text'


// elemento.outerHTML; // todo o html do elemento
// elemento.innerHTML; // altera o html interno
// elemento.innerText; // altera o texto, sem tags


const menu = document.querySelector('.menu');
const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-lista');


function viewElementContent() {
  console.log(menu.outerHTML); // todo o html do elemento
  console.log(menu.innerHTML); // html interno
  console.log(menu.innerText); // texto, sem tags

  console.log(h1.outerHTML); // todo o html do elemento
  console.log(h1.innerHTML); // html interno
  console.log(h1.innerText); // texto, sem tags

  console.log(animaisLista.outerHTML); // todo o html do elemento
  console.log(animaisLista.innerHTML); // html interno
  console.log(animaisLista.innerText); // texto, sem tags

}


function modifierElementContent() {
  // h1.innerHTML = '<h1>Texto</h1>'
  // h1.innerText = '<p>Texto II</p>'
}



// viewElementText()
// modifierElementContent()



