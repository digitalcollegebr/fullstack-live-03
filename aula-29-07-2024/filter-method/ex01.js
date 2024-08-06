// const mercadorias = ["Sabão em Pós 250g", "Coca-cola 2L", "São Geraldo 2L"]
// function ehRefrigerante(mercadoria) {...}
// nós precisamos de um problema de filtragem
// Existe um método para arrays que irá percorrer cada
// elemento de um dado array e caso a regra aplicada a
// esse elemento retorne true, o elemento em questão
// fará parte de um novo array (que é um subconjunto do array originial)

const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter((numero) => numero % 2 === 0);

console.log(`Eu sou o array numeros: ${numeros}`);
console.log(`Eu sou o array pares: ${pares}`);
