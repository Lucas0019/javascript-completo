// Retorne um número aleatório
// entre 1050 e 2000
const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const arrayNumeros = numeros.split(", ");
const maiorNumero = Math.max(...arrayNumeros);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparPrecos(preco) {
  preco = Number(
    preco.toUpperCase().replace("R$", "").trim().replace(",", ".")
  );
  preco = Number(preco.toFixed(2));

  return preco;
}

let somaPrecos = 0;

listaPrecos.forEach((preco) => {
  somaPrecos += limparPrecos(preco);
});

const resultadoDesafio = somaPrecos.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});

console.log(resultadoDesafio);
