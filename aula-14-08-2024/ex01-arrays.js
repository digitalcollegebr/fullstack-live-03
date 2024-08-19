// Desestruturação de arrays

// Desestruturação simples
const alunos = ["Neto", "Calonne", "Gabriel", "Anne", "Vivian"];

const [aluno01, aluno02, aluno03, aluno04, aluno05] = alunos;

console.log(alunos);
console.log(aluno01);
console.log(aluno02);
console.log(aluno03);
console.log(aluno04);
console.log(aluno05);

// Desestruturação parcial
const carros = ["Marea", "Fusca", "Punto", "Chevette"];

const [carro01, carro02, , carro04] = carros;

console.log(carros);
console.log(carro01);
console.log(carro02);
console.log(carro04);

// Desestruturação com valor padrão

const times = ["Ceará", "Fortaleza", "Icasa", "River"];

const [timeA, timeB, timeC, timeD, timeE = "Flamengo"] = times;

console.log(times);
console.log(timeA);
console.log(timeB);
console.log(timeC);
console.log(timeD);
console.log(timeE);

// Desestruturação com rest parameter
let [maiorDaCapital, outroMaiorDaCapital, ...todosOsOutros] = times;

console.log(maiorDaCapital);
console.log(outroMaiorDaCapital);
console.log(todosOsOutros);
