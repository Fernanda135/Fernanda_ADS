let ano = parseInt(prompt('digite seu ano de nascimento:'))
const atual = 2024

var sub = atual - ano

if(sub >= 18) {
  console.log('maior de idade')
} else {
  console.log('menor de idade')
}