/*8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem
decrescente. 
*/

let listaNumeros = []

alert('Crie uma lista com 3 números inteiros')

for (i=1; listaNumeros.length <= 2; i++) {
  
    numero = prompt('Digite o '+i+'º')
    listaNumeros.push(Number(numero))   
    
}

listaNumeros.sort(function(a, b) {  
  return b - a;
})

alert('Seus números em ordem decrescente: '+listaNumeros)