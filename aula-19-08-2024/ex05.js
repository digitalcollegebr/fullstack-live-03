const json = '{"name": "João"}';

try {
	const usuario = JSON.parse(json);

	console.log(usuario.name);

	// Retire o comentário abaixo para ver a execução do bloco catch
	// throw new Error("Bazinga!");
} catch (error) {
	if (error instanceof SyntaxError) {
		console.error("Erro de sintaxe ao parsear JSON: =", error.message);
	} else {
		console.error("Outro erro: ", error.message);
	}
}
