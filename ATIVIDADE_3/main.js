/*10) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar
umaindicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2

Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo
com a tabela abaixo.
IMC em adultos Condição
Abaixo de 18,5 Abaixo do peso
Entre 18,5 e 25 Peso normal
Entre 25 e 30 Acima do peso
Acima de 30 obeso 
*/

alert('Vamos calcular o seu IMC')

let peso = Number(prompt('Digite o seu peso'))
let altura = Number(prompt('Digite sua altura'))

const imc = peso / (altura * altura)

if (imc <= 18.5) {
  alert('Você está abaixo do peso')

}
if (imc > 18.5 & imc <= 25 ) {
  alert('Seu peso está normal')

}
if (imc > 25 & imc <= 30) {
  alert('Você está acima do peso')

}
if (imc > 30) {
  alert('Você está obeso')
  
}