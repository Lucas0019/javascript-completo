// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');
const toArray = Array.from(cursos);
const cardCursos = toArray.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  return {
    titulo,
  };
})


// Retorne uma lista com os números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const numerosMaioresQue100 = numeros.filter((numero) => numero > 100);


// Verifique se Baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const instrumentoBaixo = instrumentos.some((instrumento) => instrumento === 'Baixo');


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]


// Retorne um array somente com os preços e depois some os preços
const preco = compras.map((compra) => compra.preco);
const cleanPreco = preco.map((preco) => preco.replace('R$ ', '').replace(',', '.'));
const somaPreco = cleanPreco.reduce((total, preco) => total + parseFloat(preco), 0);

// A função parseFloat() analisa um argumento string e retorna um número de ponto flutuante.

