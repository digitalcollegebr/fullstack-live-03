const numeros = [1, 2, 3, 4];
const VALOR_INICIAL = 0;

function redutora(acumulador, valorInicial) {
	return acumulador + valorInicial;
}

let somaComValorInicialPresente = numeros.reduce(
	(acumulador, valorInicial) => redutora(acumulador, valorInicial),
	VALOR_INICIAL
);

console.log(somaComValorInicialPresente);
