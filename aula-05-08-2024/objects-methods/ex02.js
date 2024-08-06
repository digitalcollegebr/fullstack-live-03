const nome = {
	primeiroNome: "Lucas",
	sobrenome: "Neris",
};

const detalhes = {
	profissao: "Programador",
	empregador: "Digital College",
};

const funcionario = Object.assign(nome, detalhes);

console.log(funcionario);
