// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos =  document.querySelectorAll('a[href^="#"]')
const handleLink = (event) => {
  event.preventDefault()
  linksInternos.forEach((link) => {
    link.classList.remove('ativo')
  })
  // this.classList.add('ativo')
  event.currentTarget.classList.add('ativo')
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelectorAll('body *')
const handleElement = (e) => {
  console.log(e.currentTarget);
}

allElements.forEach((element) => {
  element.addEventListener('click', handleElement)
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const removeElements = document.querySelectorAll('body *')
const handleRemove = (e) => {
  e.currentTarget.remove()
}

allElements.forEach((element) => {
  element.addEventListener('click', handleRemove)
})


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
const handleClick = (e) => {
  if (e.key === 't') {
    document.documentElement.classList.toggle('textBigger')
  }
}

window.addEventListener('keydown', handleClick)