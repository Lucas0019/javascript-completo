// O this faz referência ao próprio objeto construído com a Constructor Function.

function Carro(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const honda = new Carro('Honda', 2000);
const fiat = new Carro('Fiat', 3000); 
const fusca = new Carro('Fusca', 4000);

// Variáveis dentro da Constructor estão "protegidas".