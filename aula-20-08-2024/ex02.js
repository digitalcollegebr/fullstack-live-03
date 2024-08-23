function fazRequisicaoHTTP(resolver = true) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			if (!resolver) {
				reject("Deu erro");
			}

			resolve("Promise resolvida");
		}, 3000);
	});
}

/*

fazRequisicaoHTTP(false)
	.then((resposta) => {
		console.log(resposta);
	})
	.catch((error) => {
		console.error(error);
	})
	.finally(() => {
		console.log("Operação concluída");
	});

*/

// Callback hell

async function executarOperacao() {
	try {
		// Para rejeitar passe o valor false
		// true é colocado por padrão se nada for passado
		const resultado = await fazRequisicaoHTTP();

		console.log(resultado);
	} catch (error) {
		console.error(error);
	} finally {
		console.log("Operação que é sempre realizada!");
	}
}

executarOperacao();
