// Mostre no console cada parágrafo do site
const cadaParag = document.querySelectorAll('p')
console.log(cadaParag);

cadaParag.forEach((item) => console.log(item))


// Mostre o texto dos parágrafos no console
cadaParag.forEach((item) => console.log(item.innerHTML))


// // Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
    console.log(i++);
});

imgs.forEach(() => i++);