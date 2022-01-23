// String
// O objeto global String  é um construtor para strings, ou uma sequência de caracteres.

const comida = 'Pizza' // Retorna uma string
const liquido = new String('Cerveja') // Retorna um obj string
const ano = new String(2022)

// str.length - Propriedade com o total de caracteres da string.
comida.length; // 5 
comida[0] // P
comida[comida.length -1 ] // a

// str.charAt(n) - Retorna o caracter de acordo com o index de (n).
const linguagem = 'JavaScript'

linguagem.charAt(0) // J
linguagem.charAt(4) // S
linguagem.charAt(linguagem.length - 1) // t

// str.concat(str1, str2, ...) - Concatena as strings e retorna o resultado.
const frase = 'A melhor linguagem é ';
const stack = 'JavaScript';

const fraseCompleta1 = frase.concat(stack, '!!');
const fraseCompleta2 = frase + stack + "!!";
const fraseCompleta3 = `${frase}${stack}!!`

// str.includes(search, position) - Verifica se a string existe dentro da string.

// A procura é case sensitive.
const fruta1 = 'Banana';
const fruta2 = 'Pera';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta1); // true
listaFrutas.includes(fruta2); // false
fruta1.includes(listaFrutas); // false

listaFrutas.includes(fruta1, 10); // true


// str.endsWith(search) e str.startsWith(search)
// Procura pela string exata dentro de outra string. 
// A procura é case sensitive.

const framework = 'React';

framework.endsWith('act'); // true
framework.startsWith('Re'); // true
framework.startsWith('eac'); // false


// str.slice(start, end) - Corta a string de acordo com os valores de start e end.

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi


// str.substring(start, end)
// Corta a string de acordo com os valores de start e end. 
// Não funcionar com valores negativos como o slice.

const stackFrontend = 'JavaScript';

stackFrontend.substring(3,5); // aS
stackFrontend.substring(0,4); // Java
stackFrontend.substring(4); // Script
stackFrontend.substring(-3); // JavaScript


// str.indexOf(search) e str.lastIndexOf(search)
// Retorna o index da string, assim que achar o primeiro resultado 
// ele já retorna. No caso do lastIndexOf ele retorna o último resultado.

const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta'); // 3


// str.padStart(n, str) e str.padEnd(n, str)
// Aumenta o tamanho da string para o valor de n. 
// Ou seja, uma string com 8 caracteres, se passarmos n = 10, 
// ela passará a ter 10 caracteres. O preenchimento é feito com espaços, 
// caso não seja declarado o segundo argumento.

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
})

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[1].padEnd(10, '.'); // R$ 99.....


// str.repeat(n) -  Repete a string (n) vezes.

const fraseTa = 'Ta'
fraseTa.repeat(5) // TaTataTaTa


// str.replace(regexp|substr, newstr|function)
// Troca parte da string por outra. 
// Podemos utilizar uma regular expression ou um valor direto. 
// Se usarmos um valor direto ele irá trocar apenas 
// o primeiro valor que encontrar.

let listaVestimentos = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaVestimentos = listaVestimentos.replace('Camisas', 'Camisetas'); // Primeiro valor encontrado
listaVestimentos = listaVestimentos.replace(/[ ]+/g, ', ');// Global

let preco = 'R$ 1200,52'
preco = preco.replace(',', '.');


// str.split(n) - Divide a string em um array.

const libs = 'SLick, Glide, sliders';
const libsArray = libs.split(' ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section'); // join é um método de Array


// str.toLowerCase() e str.toUpperCase()
// Retorna a string em letras maiúsculas ou minúsculas. 
// Bom para verificarmos input de usuários.

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true


// str.trim(), str.trimStart(), str.trimEnd()
// Remove espaço em branco do início ou final de uma string.

const valor = '  R$ 23.00   ' 

valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'

