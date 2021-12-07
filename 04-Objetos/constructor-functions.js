function Carro() {
  this.marca = "Fiat";
  this.modelo = "Uno";
  this.ano = 2010;
  this.color = "Rojo";
}

const honda = new Carro();
honda.marca = "Honda";
console.log(honda.marca);