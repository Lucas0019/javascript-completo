// CLASSLIST
// Retorna uma lista com as classes do elemento. 
// Permite adicionar, remover e verificar se contém.

const menu = document.querySelector('.menu');


console.log(menu.className); //Retorna uma string - nome da classe
console.log(menu.classList); //ArrayLike - Retorna todas as classes presentes da classe menu

// Usando objetos disponíveis

//Antes
//Forma antiga - add classes
menu.className += ' formaAntiga'
console.log(menu.className);


menu.classList.add('fuiAdicionado') //Adiciona uma nova classe na tag <nav></nav>
menu.classList.add('maisUmAdd', 'euTbmFuiAdd') //Adicionando duas classes 

menu.classList.remove('euTbmFuiAdd')// Remover a classes .euTbmFuiAdd

menu.classList.toggle('euTbmFuiAdd'); // adiciona/remove a classe

if (menu.classList.contains('euTbmFuiAdd')) {
    menu.classList.add('voltei');
} else {
    menu.classList.add('naoVoltei')
}


//Atributes - Retorna uma array-like com os atributos do elemento.

const animais = document.querySelector('.animais');

console.log(animais.attributes); //Retorna um NameNodeMap com os atributos
console.log(animais.attributes[0]); //Retorna o primeiro atributo



// getAttribute e setAttribute - Métodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector('img');

console.log(img.getAttribute('src')); // Retorna o valor do src

// O setAttribute verifica se tem alguma classe, caso não tem ele add , e se tiver ele atualiza
const imgRaposa = img.getAttribute('alt')
img.setAttribute('alt', 'Raposa__laranja')
console.log(imgRaposa);

const possuiAlt = img.hasAttribute('alt')// true
const possuiTitle = img.hasAttribute('title') // False
console.log(possuiAlt, possuiTitle);


img.removeAttribute('alt'); // remove o alt



// Read Only vs Writable
// Existem propriedades que não permitem a mudança de seus valores, 
// essas são considerados Read Only, ou seja, apenas leitura.

const animais = document.querySelector('.animais');

animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only
