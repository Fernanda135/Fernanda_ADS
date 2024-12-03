function calcularFatorial(numero) {
  if (numero < 0) {
    return "O fatorial não é definido para números negativos.";
  } else if (numero === 0 || numero === 1) {
    return 1;
  } else {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
}

const numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
const resultado = calcularFatorial(numero);

console.log(`O fatorial de ${numero} é: ${resultado}`);