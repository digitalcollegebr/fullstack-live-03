function calcularFrete(nomeDoBairro) {
	let valorDoFrete = 5;

	switch (nomeDoBairro) {
		case "Monte Castelo":
			valorDoFrete = 12;
			break;
		case "Montese":
			valorDoFrete = 8;
			break;
		case "Papicu":
			valorDoFrete = 22;
			break;
		default:
			valorDoFrete = 5;
	}

	return valorDoFrete;
}

let valorDoFreteNoMC = calcularFrete("Monte Castelo");
console.log(valorDoFreteNoMC);

console.log(`O frete para o bairro Montese é: ${calcularFrete("Papicu")}`);

let valorDoFreteNoME = calcularFrete("Meireles");
console.log(valorDoFreteNoME);
