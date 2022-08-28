// [].some(), se pelo menos um return da iteração for truthy, ele retorna true.

const frutas = ['Banana', 'Pêra', 'Uva'];
const temUva =  frutas.some(fruta => fruta === 'Uva');

const maiorQue100 = [10, 25, 70, 105, 120, 30, 250]
const temMaiorQue100 = maiorQue100.some(numero => numero > 100);
const temIgual70 = maiorQue100.some(numero => numero === 70);
