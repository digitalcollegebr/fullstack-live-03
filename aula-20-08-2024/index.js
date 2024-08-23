/*
Uma Promise em JavaScript pode estar em um dos seguintes estados:

1 - Pending (Pendente): Estado inicial, ainda não resolvido ou rejeitado.
2 - Fulfilled (Resolvida): A operação assíncrona foi concluída com sucesso.
3 - Rejected (Rejeitada): A operação assíncrona falhou.
*/

/*
Promises são um objeto que representa a eventual conclusão 
(ou falha) de uma operação assíncrona e seu valor resultante.
*/

function fazRequisicaoHTTP(resolver = true) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			if (!resolver) {
				reject("Deu erro");
				// throw new Error("Bazinga!");
			}

			resolve("Promise resolvida");
		}, 3000);
	});
}

// fazRequisicaoHTTP(false).then(console.log).catch(console.error);

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
