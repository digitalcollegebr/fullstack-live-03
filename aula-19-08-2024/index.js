/* 

try {
  // Código que pode gerar uma exceção
} catch (error) {
  // Código que lida com a exceção
} finally {
  // Código que sempre será executado
}

*/

try {
	console.log(usuario);
} catch (error) {
	console.error(`Um erro aconteceu: ${error.name} - ${error.message}`);
} finally {
	console.log("Eu sempre serei executado pela JavaScript");
}
