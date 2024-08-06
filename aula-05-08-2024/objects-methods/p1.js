// Apenas um único usuário

const usuario = {
	nome: "Neris",
	idade: 56,
	status: "ATIVO",
	bio: function () {
		console.log(`${this.nome} - ${this.idade}`);
	},
};

const chaves = Object.keys(usuario);

console.log(chaves);

// Lista de usuários

const usuarios = [
	{
		nome: "Neris",
		idade: 56,
		status: "ATIVO",
		bio: function () {
			console.log(`${this.nome} - ${this.idade}`);
		},
	},
	{
		nome: "Gabriel",
		idade: 23,
		status: "INATIVO",
		bio: function () {
			console.log(`${this.nome} - ${this.idade}`);
		},
	},
	{
		nome: "Rodrigo",
		idade: 45,
		status: "ATIVO",
		bio: function () {
			console.log(`${this.nome} - ${this.idade}`);
		},
	},
];

usuarios.forEach((usuario) => {
	let chaves = Object.keys(usuario);

	console.log(chaves);
});
