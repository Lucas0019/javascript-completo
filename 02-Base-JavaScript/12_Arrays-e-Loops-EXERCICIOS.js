// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let ano = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (let i = 0; i < ano.length; i++) {
    console.log(`O brasil ganhou a copa de ${ano[i]}`);
    // break;

}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);

    if (frutas[i] === 'Pera') {
        break
    }
}

console.log('\n');

// Coloque a última fruta do array acima em uma variável,
// sem remover a mesma da array.

var maisFrutas = ['Laranja', 'Graviola', 'Pêssego', 'Caju']

var ultimaFruta = maisFrutas[maisFrutas.length - 1]
console.log(ultimaFruta);