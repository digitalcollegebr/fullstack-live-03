const json = "{ json mal formatado }";

try {
	const usuario = JSON.parse(json);

	console.log(usuario.name);
} catch (error) {
	console.log(
		"Desculpe-nos. Um erro ineserado aconteceu. Nossa equipe já foi informada."
	);
	console.error(error.name);
	console.error(error.message);
}

// class SyntaxError {
// 	SyntaxError(name, message) {
// 		this.name = this.name;
// 		this.message;
// 	}
// }

// new SyntaxError(
// 	"SyntaxError",
// 	"Expected property name or '}' in JSON at position 2"
// );
