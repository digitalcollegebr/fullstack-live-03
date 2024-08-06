const desconto = (valorOriginal, taxaDeDesconto) => {
	return valorOriginal * taxaDeDesconto;
};

const TAXA_DE_DESCONTO = 0.9;

const precosOriginais = [100, 200, 300, 400, 500];

const precosComDesconto = precosOriginais.map(function (preco) {
	let precoComDesconto = desconto(preco, TAXA_DE_DESCONTO);
	return precoComDesconto;
});

console.log(precosComDesconto);

// Ir de 100 para 90;
// Ir de 200 para 180;
// Nós precisamos de uma função transformadora
