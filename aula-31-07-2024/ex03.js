const contaBancaria = {
	numero: "10120300120",
	saldo: 1234950.0,
	pessoa: {
		nome: "Lucas",
		idade: "30",
		profissao: "Professor",
	},
};

console.log(contaBancaria.numero);
console.log(contaBancaria.pessoa.nome);

const produtosVendidos = [
	{
		nomeDoProduto: "Café Santa Clara",
		valor: 12.0,
	},
	{
		nomeDoProduto: "Cuscuz 40",
		valor: 5.5,
	},
];

for (let produto of produtosVendidos) {
	console.log(produto.nomeDoProduto);
	console.log(produto.valor);
}
