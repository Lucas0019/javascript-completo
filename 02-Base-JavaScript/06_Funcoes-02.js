//Pode ou não retornar um valor

/** UNDEFINED
 *Quando não definimos o return, ela irá retornar undefined. 
 *O código interno da função é executado normalmente, 
 *independente de existir valor de return ou não
 */

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc.toFixed());
}

imc(80, 1.80); // retorna o imc
console.log(imc(80, 1.80)); // retorna o imc  undefined


//Valores Retornados
function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return 'Informe a sua idade';
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}

//Não é uma boa prática ter uma função com vários retornos de tipos 
//Nesse caso (String, number, boolean)
console.log(terceiraIdade(20)); //false
console.log(terceiraIdade(70)); //true
console.log(terceiraIdade('Lucas')); // Informe a sua idade

//Escopo

//Variáveis e funções definidas dentro de um bloco {}, 
//não são visíveis fora dele.
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}

const totalPaises = 25
console.log(totalPaises); // erro, totalPaises não definidos


//ESCOPO LEXICO
//Funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = 'Dev Front End';

function dados() {
    var nome = 'Lucas Xavier';
    var idade = 20;

    function outrosDados() {
        var endereco = 'São Paulo';
        var idade = 21;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}


console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
// console.log(outrosDados()); // retorna um erro



// Hoisting

// Antes de executar uma função, o JS 'move' 
//todas as funções declaradas para a memória
imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc.toFixed(2))
}