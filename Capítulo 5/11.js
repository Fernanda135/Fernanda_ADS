function exibirImparesAte(numero) {
  console.log("Números ímpares de 0 até " + numero + ":");

  for (let i = 1; i <= numero; i += 2) {
    console.log(i);
  }
}

const numero = parseInt(prompt("Digite um número positivo:"));

if (numero >= 0) {
  exibirImparesAte(numero);
} else {
  console.log("Por favor, digite um número positivo.");
}
