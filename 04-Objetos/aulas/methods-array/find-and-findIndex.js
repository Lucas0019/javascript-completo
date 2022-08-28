// [].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. 
// Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.

const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas.findIndex((fruta) => {
  return fruta === 'Uva'; 
}); // 2

const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.find(x => x > 45); // 88
