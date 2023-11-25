/*10) Escreva um algoritmo que leia um valor inicial A e imprima a seqüência de valores do cálculo de
A! e o seu resultado. Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120 */


// Definindo valor inicial
const numero = Number(prompt('Defina um número para calcular sua fatorial'))

let fatorial = 1
let expressao = ''

for (i = numero; i >= 1; i--) {
  
  fatorial *=  i // Calculando fatorial do número definido
  
  if (i === numero) {
    
    expressao = ''+numero+'! = '+numero // Inserindo expressão inicial
  }
  
  if (i !== numero) {
    
    expressao += ' X '+i // Inserindo expressão meio
  }
}

expressao += ' = '+fatorial // Inserindo expressão final

alert(expressao)