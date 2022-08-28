// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial) 

// executa a função de callback para cada item da Array. 
// Um valor especial existe nessa função de callback, 
// ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.

const aulas = [10, 25, 30];
const total1 = aulas.reduce((acumulador, atual) => {
  return acumulador + atual;
});
total1; // 65

const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
total2; // 165


const numeros = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
});

maiorValor; // 60


// Retornar outros valores com reduce
const stacks = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaStacks = stacks.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {})

