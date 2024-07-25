// Anonymous Function
setTimeout(function () {
	console.log("Função anônima executada após 2 segundos");
}, 2000);

// se auto-executa
(function () {
	console.log("Sou executada imediatamente!");
})();
