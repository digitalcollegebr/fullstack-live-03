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

function fazRequisicaoHTTP() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			resolve("Promise resolvida");
		}, 3000);
	});
}

fazRequisicaoHTTP().then(console.log);
