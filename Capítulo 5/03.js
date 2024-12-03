const ent1 = prompt('digite a primeira nota:')
const ent2 = prompt('digite a segunda nota;')
const ent3 = prompt('digite a terceira nota: ')

const not1 = Number(ent1)
const not2 = Number(ent2)
const not3 = Number(ent3)

const media =  (not1 + not2 + not3) / 3

if(media >= 7) {
  console.log('aprovado')
} else {
  console.log('reprovado')
}