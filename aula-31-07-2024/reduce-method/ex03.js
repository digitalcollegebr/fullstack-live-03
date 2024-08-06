const pontuacoes = [85, 96, 78, 88, 100, 92];

const maiorPontuacao = pontuacoes.reduce(function (acumulador, valorAtual) {
	return valorAtual > acumulador ? valorAtual : acumulador;
}, pontuacoes[0]);

// const maiorPontuacao = pontuacoes.reduce(function (acumulador, valorAtual) {
// 	return valorAtual > acumulador ? valorAtual : acumulador;
// });

console.log(`A maior pontuação: ${maiorPontuacao}`);
