const carro = {
    modelo: "Fusca",
    cor: "Azul",
}

console.log(carro);

const honda = carro
honda.modelo = 'Civic'
honda.cor = 'vermelha'

console.log(honda);

const fiat = carro
fiat.modelo = '500'
fiat.cor = 'Amarela'

console.log(fiat);

// carro, fiat e honda apontam para o mesmo objeto.