/*

Você está planejando uma viagem e tem uma lista de destinos que deseja visitar. 
Você quer organizar sua viagem para que o primeiro destino seja o ponto de partida
e o segundo seja o próximo a ser visitado. O restante dos destinos serão visitados posteriormente.
 
 */

const destinos = ["Paris", "Londres", "Roma", "Amsterdã", "Berlim"];

const [primeiroDestino, segundoDestino, ...destinosFuturos] = destinos;

console.log(`Primeiro destino: ${primeiroDestino}`);
console.log(`Segundo destino: ${segundoDestino}`);
console.log(`Destinos futuros: ${destinosFuturos}`);
