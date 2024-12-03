const numeroSecreto = Math.floor(Math.random() * 101);
let tentativas = 10;

alert("Bem-vindo ao jogo de adivinhação! Tente adivinhar o número secreto entre 1 e 100. Você tem 10 tentativas.");

while (tentativas > 0) {
    const palpite = parseInt(prompt(`Digite seu palpite (${tentativas} tentativa(s) restante(s)):`));
    
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        alert("Por favor, insira um número válido entre 1 e 100.");
        continue;
    }

    if (palpite === numeroSecreto) {
        alert(`Parabéns! Você acertou o número secreto (${numeroSecreto})!`);
        break;
    } else if (palpite < numeroSecreto) {
        alert("O número secreto é MAIOR que o seu palpite.");
    } else {
        alert("O número secreto é MENOR que o seu palpite.");
    }

    tentativas--;

    if (tentativas === 0) {
        alert(`Você perdeu! O número secreto era ${numeroSecreto}.`);
    }
}