function classificarTriangulo() {
  const ladoA = parseFloat(prompt("Digite o valor do lado A:"));
  const ladoB = parseFloat(prompt("Digite o valor do lado B:"));
  const ladoC = parseFloat(prompt("Digite o valor do lado C:"));

  
  if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0 ||
      ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
    console.log("Os valores não formam um triângulo válido.");
  } else {
  
    if (ladoA === ladoB && ladoB === ladoC) {
      console.log("Triângulo equilátero.");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      console.log("Triângulo isósceles.");
    } else {
      console.log("Triângulo escaleno.");
    }
  }
}

classificarTriangulo();
