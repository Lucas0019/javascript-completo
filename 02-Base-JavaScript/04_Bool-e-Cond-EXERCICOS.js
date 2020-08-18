// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

//Lucas
function classifiqueIdade(idade, idadeFornecida) {
    if (idade < idadeFornecida) {
        console.log('É menor');
    } else if (idade > idadeFornecida) {
        console.log("É maior");
    } else {
        console.log('É igual');
    }
}

classifiqueIdade(20, 18) //Maior
classifiqueIdade(20, 30) //Menor
classifiqueIdade(20, 20) //igual



// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao); //3

// Verifique se as seguintes variáveis são Truthy ou Falsy
//usa o !! para verificar
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //undefined
var dinheiroNaConta = 0; //false

console.log('Truthy ou Falsy: ' + !!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log('Brasil tem mais habitantes');
} else {
    console.log('China tem mais habitantes');
}


// O que irá aparecer no console?
//Quando usamos o operador && (e) ele retorna o primeiro falso
if (('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

// O que irá aparecer no console?
//quando tem || (OU) ele retorna o ultimo verdadeiro 
if (('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}