// CONCILIAÇÃO BANCÁRIA

let saldoDoDia = 50000.0;
let debitosDoDia = [3500.0, 2450.0, 3000.0, 670.0];
let contaParaPagamento = 3000.0;
let saldoAposPagamento = saldoDoDia;

for (let i = 0; i < debitosDoDia.length; i++) {
	if (debitosDoDia[i] === contaParaPagamento) {
		console.log("O pagamento já foi realizado");
	}

	saldoAposPagamento -= debitosDoDia[i];
}

console.log(`O saldo da conta antes dos pagamentos era: ${saldoDoDia}`);
console.log(`O saldo da conta após os pagamentos é: ${saldoAposPagamento}`);
