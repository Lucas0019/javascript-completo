// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a')

itensMenu.forEach((item) => {
    item.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

//Remove de todos
itensMenu.forEach((item) => {
    item.classList.remove('ativo')
})


//Add a classe ativo apenas ao primeiro item do array
itensMenu[0].classList.add('ativo')


// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('alt')

imgs.forEach((img) => {
    const possuiAtt = img.hasAttribute('alt')
    console.log(img, possuiAtt);
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="https"]')

linkExterno.setAttribute('href', 'https://www.google.com/')

console.log(linkExterno);