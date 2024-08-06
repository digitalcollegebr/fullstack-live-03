const pessoa = {
	nome: "John Doe",
	idade: 12,
	altura: 1.89,
	peso: 100,
	corDosOlhos: "castanho",
	cursoSuperior: true,
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa["nome"]);
console.log(`${JSON.stringify(pessoa)}`);

const carro = {
	marca: "Toyota",
	modelo: "Corolla",
	tipo: "sedan",
	ano: "2009",
};

console.log(carro);
console.log(carro.marca);
