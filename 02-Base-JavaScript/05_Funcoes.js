//function declaration
function areaQuadrado(lado) {
    console.log(lado * lado);
}

areaQuadrado(2) //4
areaQuadrado(4) //16
areaQuadrado(8) //64

//Declarando e executando uma função

function pi() {
    return 3.14;
}

var total = 5 * pi()
console.log(total.toFixed(2)); //15.70

//Parâmetros e Argumentos
//Ao criar uma função, você pode definir parâmetros.
//Ao executar uma função, você pode passar argumentos.

function imc(pessoa, altura) {
    const imc = pessoa / (altura ** 2); //altura * altura
    console.log(imc.toFixed(2));
}

// 80 e 1.80 são os argumentos
imc(80, 1.80) //24.69
imc(70, 1.78) //22.09


//Parênteses executa a função

function corFavorita(cor) {
    if (cor === 'Azul') {
        console.log('Voce gosta do céu');
    } else if (cor === 'Verde') {
        console.log('Voce gosta do mato');
    } else {
        console.log('Voce não gosta de nada');;
    }
}

corFavorita('Verde')
corFavorita('Azul')
corFavorita('Nada')

//Argumentos podem ser funções
//Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
//Executa no seu browser 
// addEventListener('click', function() {
//     console.log('clicou');
// })

//Funções anônimas são aquelas em que o nome da função não é definido, 
//escritas como function() {} ou () => {}


//Exemplo de outra função anonima através de um objeto
const pessoa = {
    falar: function() {
        console.log("Opa Dev")
    }

}

//chamando a funcao pessoa
pessoa.falar()