const alunos = ["Neris", "Neto", "Fernando", "Vivian"];

console.log("Este é um exemplo do for...");
for (let i = 0; i < alunos.length; i++) {
	console.log(alunos[i]);
}

console.log("Este é um exemplo do for of...");
for (let aluno of alunos) {
	console.log(aluno);
}

console.log("Este é um exemplo do forEach...");
alunos.forEach(function (aluno) {
	console.log(aluno);
});

alunos.forEach((aluno) => {
	console.log(aluno);
});
