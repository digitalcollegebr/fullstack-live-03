// O método filter cria um novo array com todos
// os elementos que passam no teste implementado
// pela função fornecida.

const palavras = ["maça", "banana", "abacaxi", "kiwi"];
const longas = palavras.filter((fruta) => fruta.length > 5);

console.log(`Eu sou o array palavras: ${palavras}`);
console.log(`Eu sou o array longas: ${longas}`);
