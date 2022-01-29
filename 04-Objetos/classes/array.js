// Arrays
// Arrays armazenam uma coleção de elementos.
// Estes podem ser strings, arrays, boolean, number, functions, objects e mais.

const instrumentos = ["Guitarra", "Baixo", "Bateria", "Violão"];
const precos = [49, 99, 69, 199];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    // console.log(nome);
  },
];


dados[2]('Ford');
dados[1][2].cor; // azul


// Construção de arrays

// Toda array herda os métodos e propriedades do protótipo do construtor Array.

// Os valores das array's não são estáticos

const carros = new Array('Corola', 'Mustang', 'Honda');

carros[1] // Mustang
carros[2] = 'Ferrari';
carros[10] = 'Parati';
carros.length; // 11



// Métodos de array

// Métodos de array são funções que podem ser aplicadas a arrays.


// Array.from()
// É um método utilizado para transformar array-like objects, em uma array.

let li = document.querySelectorAll('li'); // NodeList
li = Array.from(li); // Array

// Semelhante a um array [...]
const carrosModelos = {
  0: 'Fiat',
  1: 'Honda',
  2: 'Ford',
  length: 4,
}

const carrosArray = Array.from(carrosModelos);


// Array.isArray() - Verifica se o objeto é um array, retornando true ou false.
let noIsArray = {nome : 'Lucas'}
Array.isArray(noIsArray) // false

let stacks = ['React', 'Angular', 'Vue'];
Array.isArray(stacks) // true


// Array.of(), Array() e new Array()
// Verifica se o valor passado é uma array e retorna um valor booleano. 
// A palavra chave new não é necessária para utilizar o construtor Array.
Array.of(10); // [10]
new Array(10, 20, 30); // [10, 20, 30] 
Array(1, 4, 10); // [10, 20, 30]



// Propriedades e Métodos do Prototype
// [].length retorna o tamanho da array.
const frutas = [
  'Banana', 
  'Pêra', 
  ['Uva Roxa', 'Uva Verde']
];

frutas.length; // 3

frutas[0].length; // 6
frutas[1].length; // 5
frutas[2].length; // 2



// Métodos Modificadores 

// Os próximos métodos que vamos falar sobre, são 
// métodos modificadores (mutator methods). 
// Além de retornarem um valor, eles modificam a array original. 


// [].sort() - Ordena os elementos de uma array pelo unicode.   
const instrumentosMusicais = ['Guitarra', 'Baixo', 'Violão'];
instrumentosMusicais.sort();
instrumentosMusicais; // ['Baixo', 'Guitarra', Violão]

const idades = [32,21,33,43,1,12,8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8]


// [].unshift() - adiciona elementos ao início da array e retorna o length da mesma
// [].push() - adiciona elementos ao final da array e retorna o length da mesma.
const cars = ['Ford', 'Fiat', 'Jep', 'Wolkswagen'];

const addCarroPrimeiro = cars.unshift('Chevrolet');
// ['Chevrolet', 'Ford', 'Fiat', 'Jep', 'Wolkswagen']

const addCarroUltimo = cars.push('Ferrari');
// ['Chevrolet', 'Ford', 'Fiat', 'Jep', 'Wolkswagen', 'Ferrari']


// [].shift() -  remove o primeiro elemento da array e retorna o mesmo.
// [].pop() -  remove o último elemento da array e retorna o mesmo.
const removePrimeiroCarro = cars.shift();
// ['Ford', 'Fiat', 'Jep', 'Wolkswagen', 'Ferrari']

const removeUltimoCarro = cars.pop();
// ['Ford', 'Fiat', 'Jep', 'Wolkswagen']


// [].reverse() - inverte a ordem dos elementos da array.
const preStyles = ['scss', 'less', 'styles', 'styled-components'];
// preStyles.reverse();


// [].splice()
// [].splice(index, remover, item1, item2, ...) adiciona valores na array 
// a partir do index. Remove a quantidade de itens que for passada 
// no segundo parâmetro (retorna esses itens).

const tools = ['Chave de Fenda', 'Alicate', 'Martelo', 'Nivel'];
tools.splice(1, 0, 'Chave Philips', 'Furadeira');
// ['Chave de Fenda', 'Chave Philips', 'Furadeira', 'Alicate', 'Martelo', 'Nivel']

tools.splice(3, 2, 'Parafusadeira')
// 'Chave de Fenda', 'Chave Philips', 'Furadeira', 'Parafusadeira', 'Nivel']
// Removeu o item 'Martelo' e o item 'Nivel' e adicionou o item 'Parafusadeira'


// [].copyWithin()
// [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array 
// começando do inicio até o final e vai preencher a mesma com essa cópia. 
// Caso omita os valores de início e final, ele irá utilizar 
// como inicio o 0 e final o valor total da array.


const exemplo1 = ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2']

const exemplo2 = ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']


// [].fill(valor, inicio, final) 
// preenche a array com o valor, do início até o fim.
['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
// ['Banana', 'Banana', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
// ['Item1', 'Item2', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);
// ['Item1', 'Banana', 'Banana', 'Item4']



// Métodos de Acesso 
// Os métodos abaixo não modificam a array original, 
// apenas retornam uma array modificada. 

// [].concat() irá concatenar a array com o valor passado.


const transporte = ['Carro', 'Avião', 'Navio'];
const transporte2 = ['Ônibus', 'Trem'];
const juntarTransporte = transporte.concat(transporte2);
//  ['Carro', 'Avião', 'Navio', 'Ônibus', 'Trem']

const maisTransporte = [].concat(transporte, transporte2, 'Camnhão', 'Balão');
// ['Carro', 'Avião', 'Navio', 'Ônibus', 'Trem', 'Camnhão', 'Balão']


// [].includes(), [].indexOf() e [].lastIndexOf()
// [].includes(valor) verifica se a array possui o valor e retorna true ou false. 
// [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array.
// [].lastIndexOf(valor) retorna o index do último.

const stacksEcommerce =  ['vtex io', 'Tray', 'vtex cms', 'Shopify', 'Magento', 'Tray'];

stacksEcommerce.includes('vtex io'); // true
stacksEcommerce.includes('tray'); // false - case sensitive
stacksEcommerce.includes('Linx'); // false

stacksEcommerce.indexOf('vtex io'); // 0
stacksEcommerce.indexOf('Shopify'); // 2

stacksEcommerce.lastIndexOf('Tray'); // 4



// [].join()
// [].join(separador) junta todos os valores da array e retorna uma string com eles. 
// Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.

const stacksJs = ['Vue.js', 'React.js', 'Slick.js', 'Glide.js', 'Miraje.js' ]

stacksJs.join('')
// 'Vue.js,React.js,Slick.js,Glide.js,Miraje.js'

stacksJs.join(' ')
// 'Vue.js React.js Slick.js Glide.js Miraje.js'

stacksJs.join('-/-')
// 'Vue.js-/-React.js-/-Slick.js-/-Glide.js-/-Miraje.js'


let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join('h1');
// <h1>Título Principal</h1>


// [].slice()
// [].slice(inicio, final) retorna uma nova array com os elementos entre o início e o final.
const osLinux = ['Umbutu', 'Fedora', 'Mint', 'Debian', 'Manjaro']

osLinux.slice(3) // ['Debian', 'Manjaro']
osLinux.slice(1, 4) // ['Fedora', 'Mint', 'Debian',]

const cloneOsLinux = osLinux.slice();
// ['Umbutu', 'Fedora', 'Mint', 'Debian', 'Manjaro']
