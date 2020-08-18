//False ou true

//Condicionais If e Else
var possuiCarro = true

if (possuiCarro) {
    console.log('Possui carro');
} else {
    console.log('Não possui');
}

//Condicionais Else If.....else
var possuiGraduacao = true,
    possuiDoutorado = false;

if (possuiDoutorado) {
    console.log('Possui graduação e doutorado');
} else if (possuiGraduacao) {
    console.log('Possui graduação, mas não possui doutorado');
} else {
    console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado


//Operadores de comparação 
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true



//Operadores Lógicos && (E)
//Retornar o primeiro valor FALSO
/**
 * Se ambos os valores forem true ele irá retornar o último valor verificado 
 * Se algum valor for false ele irá retornar o mesmo e não irá
 * continuar a verificar os próximos
 */
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

//Operadores Lógicos || (OU)
/**
 * Retorna o primeiro valor true que encontrar
 */
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

//Teste 

var cond = (5 - 5) || (5 + 5) && (10 - 2)

console.log(cond);


//SWITCH
//Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu.');
        break;
    case 'Vermelho':
        console.log('Olhe para rosas.');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol.');
        break;
    default:
        console.log('Feche os olhos');
}

//Aplicando o conhecimento 
let valorNasc = 2000

switch (valorNasc) {
    case 2020:
        console.log('Não vim do futuro ');
        break;
    case 2000:
        console.log('Acho minha data de nascimento');
        break;
    default:
        console.log('Data invalida');
        break;
}