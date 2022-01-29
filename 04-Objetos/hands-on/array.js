const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
console.log(comidas)

// Remova o primeiro valor de comidas e coloque em uma variável
const primeiroValor = comidas.shift()
console.log(primeiroValor)

// Remova o último valor de comidas e coloque em uma variável
const ultimoValor = comidas.pop()
console.log(ultimoValor)

// Adicione 'Arroz' ao final da array
comidas.push('Arroz')
console.log(comidas)

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata')
console.log(comidas)



const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
console.log(estudantes)

// Arrume os estudantes em ordem alfabética
estudantes.sort()
console.log(estudantes)

// Inverta a ordem dos estudantes
estudantes.reverse()
console.log(estudantes)

// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana')) // true)

// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana')) // false)


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
console.log('Antes', html)

// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul')
html = html.split('div').join('li')
console.log('Depois', html)


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
console.log(carros)

// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const cloneCarros = carros.slice()
cloneCarros.pop()

console.log(cloneCarros)
