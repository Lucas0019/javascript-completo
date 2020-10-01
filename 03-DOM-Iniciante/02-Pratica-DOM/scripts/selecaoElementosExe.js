// Retorne no console todas as imagens do site
const siteImagens = document.querySelectorAll('img')
console.log(siteImagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const comecaComImagem = document.querySelectorAll('img[src^="/03-DOM-Iniciante/02-Pratica-DOM/images/imagem"]')
console.log(comecaComImagem);

// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const animais = document.querySelector('.animais-descricao h2');
console.log(animais);

// Selecione o último p do site
const ultimoP = document.querySelector('.copy');
console.log(ultimoItem);

//Ou
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);