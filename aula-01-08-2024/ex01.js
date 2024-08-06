const dadosDeEndereco = {
	logradouro: "Rua do Maracanã",
	bairro: "Monte Castelo",
	cep: "6509-9086",
	complemento: "Bloco da Libertadores",
	numero: "245",
	estado: "Ceará",
	cidade: "Fortaleza",
};

const pessoa = {
	nome: "Arrascaeta",
	idade: 28,
	cadastroCompleto: true,
	cadastroAtualizado: false,
	endereco: dadosDeEndereco,
	contato: {
		email: "teste@teste.com",
		numerosDeTelefone: ["85 9001-4590", "85 9234-8976"],
	},
	saudacao: function (nomeOutraPessoa) {
		return `Olá, meu nome é ${this.nome}! Tudo bem, ${nomeOutraPessoa}?`;
	},
};

console.log(pessoa["idade"]);

delete pessoa.idade; // remover uma propriedade

console.log(pessoa["idade"]);

pessoa.altura = "1.75"; // adicionar uma propriedade

console.log(pessoa.altura);

console.log(pessoa.saudacao("Neris"));

console.log(pessoa.endereco.cep);

console.log(pessoa.contato.numerosDeTelefone[0]);
