function valorDoEmprestimo(idade, salario, existeBloqueio) {
	if (existeBloqueio === true) {
		return;
	}

	if (salario <= 2500.0) {
		return;
	}

	if (idade <= 25) {
		return;
	}

	return 34000;
}

function formatarValor(valor) {
	return valor != undefined ? valor : 0.0;
}

let valor = valorDoEmprestimo(30, 40000.0, false);

let mensagem = `O seu empréstimo é igual a: R$ ${formatarValor(valor)}`;

console.log(mensagem);
