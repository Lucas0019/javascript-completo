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