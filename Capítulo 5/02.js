const ent1 = prompt('digite o primeiro númer:')
const ent2 = prompt('digite o segundo número')
const ent3 = prompt('digite o terceiro número')
const num1 = Number(ent1)
const num2 = Number(ent2)
const num3 = Number(ent3)

var maior = num1

if(num2 > maior)
  maior = num2
if(num3 > maior) 
  maior = num3

console.log('o maior número é:', maior)