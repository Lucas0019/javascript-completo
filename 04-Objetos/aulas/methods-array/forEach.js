// [].forEach(callback(itemAtual, index, array)) 

// a função de callback é executada para cada item da array. 
// Ela possui três argumentos, itemAtual (valor do item da array), 
// index (index do valor na array) e array (array original).

// O método sempre retorna undefined

const carros = ['Ford', 'Fiat', 'VW', 'Honda', 'Chevrolet'];

carros.forEach((item, index, array) => {
  console.log(item, index, array);
})

// O terceiro argumento do callback é uma referência direta 
// e se modificado irá também modificar a array original.

carros.forEach((item, index, array) => {
  array[index] = 'Carro: ' + item;
  console.log(carros)
});

carros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda'