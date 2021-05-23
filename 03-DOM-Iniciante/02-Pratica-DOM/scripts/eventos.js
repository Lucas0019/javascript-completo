//addEventListener 

// Adiciona uma função ao elemento, essa função é chamada de callback
// que é sempre execultada  quando o evento ocorre.
const img = document.querySelector('img');

//elemento.addEventListener(event, callback, options)
// img.addEventListener('click', () => console.log("Clicou na img"))


// Callback 

// É uma boa prática seprar a função de callbacl do addEventListener
const title = document.querySelector('.titulo')
const callbackTitle = () => {
  console.log('Clicou no Titulo');
}

title.addEventListener('dblclick', callbackTitle) 


// Event

// O primeiro paranametro do callback é referente ao evento que ocorreu
// Geralmente usamos 'e' ao invés de 'event'
const copyEvent = document.querySelector('.copy')
const copyFunction = (event) => console.log(event);

copyEvent.addEventListener('click', copyFunction)


// Propriedades do Event
const animaisLista = document.querySelector('.animais-lista');
const execultarCallback = (event) => {
  const currentTarget = event.currentTarget // Item que adicionou o evento
  const target = event.target // onde o clique ocorreu
  const type = event.type // Tipo de evento
  const path = event.path // Caminho

  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', execultarCallback)


// Event.preventDefault()

// Previne comportamento padrão do evento no browser.
// No caso de um link, por exemplo, irá previnir que o link seja
const linkExterno = document.querySelector('a[href^="http"]')

const clickNoLink = (event) => {
  event.preventDefault()
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink)


// This

// A palavra chave this, é uma plavra especial no JS, que pode fazer referência a
// diferentes obejtos dependendo do contexto. No caso de eventos, ela fará referência ao
// elemento em que addEventListener foi adicionado
// o this nesse contexto tem a mesma funcionalidade do event.currentTarget
const srcImg = document.querySelector('img')
const  imgCallback = (event) => {
  console.log(this); // retorna img
  console.log(this.getAttribute('src'));
}

srcImg.addEventListener('click', imgCallback)


// Diferentes eventos
const h2 = document.querySelector('h2')
const h2Callback = (event) => {
  console.log(event.type, event);
}

h2.addEventListener('click', h2Callback)
h2.addEventListener('mouseenter', h2Callback)
h2.addEventListener('copy', h2Callback)

// Evento Geral
// window.addEventListener('scroll', h2Callback)
// window.addEventListener('resize', h2Callback) // Largura da Pagina
// window.addEventListener('keydown', h2Callback) 


// Keyboard

// Atalhos para navegação do site através de eventos de keyboard
const handleKeyboard = (event) => {
  if (event.key === 'a') {
    document.body.classList.toggle('azul')
  } else if (event.key === 'v') {
    document.body.classList.toggle('vermelho')
  }
}

window.addEventListener('keydown', handleKeyboard)


// ForEach e Eventos
const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});

