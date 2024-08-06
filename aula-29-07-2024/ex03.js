const pessoas = [
	{ nome: "João", idade: 20 },
	{ nome: "Maria", idade: 28 },
	{ nome: "Pedro", idade: 25 },
	{ nome: "Marcos", idade: 18 },
	{ nome: "Lucas", idade: 29 },
	{ nome: "João", idade: 20 },
];

const maioresDe25 = pessoas.filter((pessoa) => pessoa.idade > 25);

const nomes = maioresDe25.map((pessoaMaiorDe25) => {
	return pessoaMaiorDe25.nome;
});

function imprimirNome(arrayDeNomes) {
	for (let nome of arrayDeNomes) {
		console.log(nome);
	}
}

imprimirNome(nomes);

console.log(nomes);
