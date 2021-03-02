// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop

console.log(`A distancia é ${imgTop}px`);



// Retorne a soma da largura de todas as imagens
 somaImagens = () => {
    const somaImg = document.querySelectorAll('img');
    let soma = 0

    somaImg.forEach((imagem) =>{
        soma += imagem.offsetWidth
        // soma = soma + imagem.offsetWidth
    });
    console.log(`A soma das imagens é ${soma}px`);
 }


 //onload - evento que espera a pagina carregar para ativara a função
 window.onload = () =>{
     somaImagens() //300 - Pode variar
 }



// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeigth = link.offsetHeigth;

    if (linkWidth >= link.offsetWidth && linkHeigth >= 48) {
        console.log(link, 'Possui boa acessibilidade');
    } else {
        console.log(link, 'Não possui boa acessibilidade');
    }
})


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

//Nota: ideia de menu mobo, ai só aplica os estilos e tals

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if (browserSmall ) {
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
}