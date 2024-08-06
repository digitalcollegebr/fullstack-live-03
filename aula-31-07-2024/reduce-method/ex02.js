const extrato = [3500.67, 3459.23, -2300, 890.99];

const saldoDaConta = extrato.reduce(function (acumulador, valorAtual) {
	return acumulador + valorAtual;
}, 0);

console.log(`O saldo da sua conta é R$ ${saldoDaConta.toFixed(2)}`);
