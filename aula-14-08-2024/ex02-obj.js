// Desestruturação de objetos

// Desestruturação simples
const pessoa = { nome: "Neris", idade: 30 };
const { nome, idade } = pessoa;

console.log(nome);
console.log(idade);

// Desestruturação com renomeação de variáveis
const { nome: banana, idade: aboba } = pessoa;

console.log(banana);
console.log(aboba);

// Desestruturação com valor padrão
const novaPessoa = { novoNome: "Fernando", novaIdade: 25 };
const { novoNome, novaIdade, cidade = "Fortaleza" } = novaPessoa;

console.log(novoNome);
console.log(novaIdade);
console.log(cidade);

// Desestruturação com propriedades aninhadas
const usuario = {
	username: "lucas.rockplay",
	address: {
		city: "Teresina",
		country: "Brazil",
	},
};

const {
	username,
	address: { city, country },
} = usuario;

console.log(username);
console.log(city);
console.log(country);

// Desestruturação com rest parameter
const apartamento = {
	numero: "1012",
	quantidadeDeQuartos: 3,
	quantidadeDeVagasParaCarros: 2,
	temQuartoSuite: true,
};

const { numero, ...todoOResto } = apartamento;

console.log(numero);
console.log(todoOResto);
