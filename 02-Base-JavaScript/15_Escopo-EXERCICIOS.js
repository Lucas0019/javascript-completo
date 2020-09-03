// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;

    console.log('Dentro do bloco: ' + marca, portas);
}
console.log('Fora do bloco: ' + cor);


// Como corrigir o erro abaixo?
const dois = 2;

function somarDois(x) {
    return x + dois;
}

function dividirDois(x) {
    return x / dois;
}

console.log(somarDois(4));
console.log(dividirDois(6));


// O que fazer para total retornar 500?
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
    console.log('Loop: ' + numero); // 1 ao 9

}

const total = 10 * numero;
console.log('Valor total: ' + total);