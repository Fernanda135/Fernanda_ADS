function converterTemperatura() {
  const temperatura = parseFloat(prompt("Digite a temperatura:"));
  const escala = prompt("Digite a escala (C para Celsius ou F para Fahrenheit):").toUpperCase();

  if (escala === 'C') {
  
    const fahrenheit = (temperatura * 9/5) + 32;
    console.log(`${temperatura}°C equivale a ${fahrenheit.toFixed(2)}°F`);
  } else if (escala === 'F') {
  
    const celsius = (temperatura - 32) * 5/9;
    console.log(`${temperatura}°F equivale a ${celsius.toFixed(2)}°C`);
  } else {
    console.log("Escala inválida. Por favor, digite C para Celsius ou F para Fahrenheit.");
  }
}

converterTemperatura();