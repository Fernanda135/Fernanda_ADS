function calcularIMC() {
  const peso = parseFloat(prompt("Digite seu peso em kg:"));
  const altura = parseFloat(prompt("Digite sua altura em metros:"));

  const imc = peso / (altura * altura);

  console.log(`Seu IMC é: ${imc.toFixed(2)}`);

  switch (true) {
    case imc < 18.5:
      console.log("Abaixo do peso.");
      break;
    case imc >= 18.5 && imc < 25:
      console.log("Peso normal.");
      break;
    case imc >= 25 && imc < 30:
      console.log("Sobrepeso.");
      break;
    default:
      console.log("Obesidade.");
  }
}

calcularIMC();
