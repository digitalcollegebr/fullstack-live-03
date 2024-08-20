function verificarNumero(valor) {
	if (isNaN(valor)) {
		throw new TypeError("O valor fornecido não é um número");
	}

	console.log("O valor é um número:", valor);
}

try {
	verificarNumero(12);
	verificarNumero("ABCS");
} catch (error) {
	console.error("Erro: ", error.message);
} finally {
	console.log("Validação concluída");
}
