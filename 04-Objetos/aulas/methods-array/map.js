// [].map(callback(itemAtual, index, array)) 

// funciona da mesma forma que o forEach(), 
// porém ao invés de retornar undefined, 
// retorna uma nova array com valores atualizados de 
// acordo com o return de cada iteração.

const frutas = ['banana', 'maçã', 'laranja', 'uva', 'pera', 'mamão'];

const newFrutas = frutas.map((fruta) => {
  return fruta.toUpperCase();
})

console.log(frutas);
console.log(newFrutas);


// [].map() com objetos

// Map pode ser muito útil para interagirmos com uma array de objetos, 
// onde desejamos isolar um valor único de cada objeto.

const aulas = [
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

const tempoAulas = aulas.map(aula => aula.min);
console.log(tempoAulas); // [15, 10, 20, 25];

const viewNames = aula => aula.nome;
const nomesAulas = aulas.map(viewNames);
console.log(nomesAulas); // ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1'];


