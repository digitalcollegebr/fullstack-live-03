// Arrays em JavaScript são estruturas de dados que permitem
// armazenar múltiplos valores em uma única variável.

let alunos = new Array("Neto", "Fernando", "Diuly");
let pontuacoes = [10, 9, 8, 7, 5, 8];

console.log(alunos);
console.log(pontuacoes);

console.log(`O tamanho do array alunos é ${alunos.length}`);
console.log(`O tamanho do array pontuacoes é ${pontuacoes.length}`);

// console.log("Quantidade de vezes que o código foi repetido (alunos)");

// for (let i = 0; i < alunos.length; i++) {
// 	console.log(i);
// }

// console.log("Quantidade de vezes que o código foi repetido (pontuacoes)");

// for (let i = 0; i < pontuacoes.length; i++) {
// 	console.log(i);
// }

// console.log(alunos[0]);
// console.log(alunos[1]);
// console.log(alunos[2]);
// console.log(alunos[3]);

console.log("Elementos presentes no array alunos: ");

for (let i = 0; i < alunos.length; i++) {
	console.log(alunos[i]);
}

console.log("Elementos presentes no array pontuacoes: ");

for (let i = 0; i < pontuacoes.length; i++) {
	console.log(pontuacoes[i]);
}
