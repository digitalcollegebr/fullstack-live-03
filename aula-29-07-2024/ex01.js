// O método map cria um novo array com os resultados
// da chamada de uma função fornecida em cada elemento
// do array de origem.

const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map((numero) => numero * 2);

console.log(`Eu sou o array numeros: ${numeros}`);
console.log(`Eu sou o array dobrados: ${dobrados}`);
