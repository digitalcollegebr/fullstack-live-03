const pessoas = [
	{ nome: "João", idade: 20 },
	{ nome: "Maria", idade: 28 },
	{ nome: "Pedro", idade: 25 },
	{ nome: "Marcos", idade: 18 },
	{ nome: "Lucas", idade: 29 },
	{ nome: "João", idade: 20 },
];

const autorizadas = pessoas.filter((pessoa) => {
	return pessoa.idade > 25;
});

console.log(`Eu sou o array pessoas: ${JSON.stringify(pessoas)}`);
console.log(`Eu sou o array autorizadas: ${JSON.stringify(autorizadas)}`);
