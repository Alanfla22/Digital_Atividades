/* 5) Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos.
Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos
números lidos. O número que encerrará a leitura será zero 
*/

// Criando uma lista de números

let listaNumeros = []
let numero = 0

alert('Crie uma lista de 10 números')

for (i=1; listaNumeros.length <= 9; i++) {
  
    numero = prompt('Digite o '+i+'º')
    listaNumeros.push(Number(numero))   
    
}

// lendo números positivos (incluindo 0)
let listaPositivos = listaNumeros.filter(numero => numero >= 0) 

// O número que encerrará a leitura será zero
listaPositivos.sort(function(a, b) {  
  return b - a;
})

// Calcule a quantidade de números pares
let listaPares = listaPositivos.filter(numero => numero % 2 === 0)
// Quantidade de números impares
let listaImpares = listaPositivos.filter(numero => numero % 2 !== 0)
// Média de valores pares
const somaPares = listaPares.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0); 
const mediaPares = somaPares / listaPares.length 
// Média geral dos valores (positivos)
const somaPositivos = listaPositivos.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0); 
const mediaPositivos = somaPositivos / listaPositivos.length

alert('Quantidade de números pares: ' + listaPares.length);
alert('Quantidade de números ímpares: ' + listaImpares.length) 
alert('Média dos valores pares: ' + mediaPares)  
alert('Média geral dos valores positivos: ' + mediaPositivos) 
     




