const RAIO = 2.5;
const VALOR_PI = 3.14;

// Você também pode usar: Math.pow(base, expoente)
// let areaCirculo = VALOR_PI * Math.pow(RAIO, 2);

let areaCirculo = VALOR_PI * RAIO * RAIO;
let perimetroCirculo = 2 * VALOR_PI * RAIO;

// O método toFixed vai permitir que você determine
// a quantidade de casas decimais de um número.
console.log(`A área do círculo é: ${areaCirculo.toFixed(2)}!`);
console.log(`O perímetro do círculo é: ${perimetroCirculo.toFixed(2)}!`);
