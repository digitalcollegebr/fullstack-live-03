// Funções são blocos de construção fundamentais em JavaScript.
// Uma função é um procedimento de JavaScript -
// um conjunto de instruções que executa uma tarefa ou calcula um valor

function somaDasNotasNoTrimestre(nota01, nota02, nota03) {
	let soma = (nota01 + nota02 + nota03) / 3;

	console.log(`A sua média neste trimestre é igual a ${soma.toFixed(2)}`);
}

somaDasNotasNoTrimestre(10, 9.5, 8.5);
somaDasNotasNoTrimestre(10, 9.5, 8.5);
somaDasNotasNoTrimestre(9, 7.5, 8.5);
