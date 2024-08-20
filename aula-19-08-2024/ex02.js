function dividir(a, b) {
	if (b === 0) {
		throw new Error("Divisão por zero não é permitida");
	}

	return a / b;
}

try {
	const resultado = dividir(10, 0);
	console.log("Resultado: ", resultado);
} catch (error) {
	console.error("Erro: ", error.message);
}
