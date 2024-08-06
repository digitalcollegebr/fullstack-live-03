const numeros = [90, 78, 56, 9];

function callbackExterno(parametroAcumulador, parametroValorAtual) {
	return parametroAcumulador * parametroValorAtual;
}

const produto01 = numeros.reduce(function (acumulador, valorAtual) {
	return callbackExterno(acumulador, valorAtual);
}, 2);

const produto02 = numeros.reduce(function (acumulador, valorAtual) {
	return callbackExterno(acumulador, valorAtual);
});

// const produto = numeros.reduce(function (acumulador, valorAtual) {
// 	return acumulador * valorAtual;
// }, 1);

// const produto = numeros.reduce((acumulador, valorAtual) => {
// 	return acumulador * valorAtual;
// }, 1);

// const produto = numeros.reduce((acumulador, valorAtual) => acumulador * valorAtual;
// , 1);

console.log(`O produto 01 dos números é ${produto01}`);

console.log(`O produto 02 dos números é ${produto02}`);
