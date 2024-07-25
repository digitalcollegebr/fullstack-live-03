// let bairro = "Monte Castelo";
let bairro = "Montese";
let taxaPadrao = 2.5;
let valorPadraoBairroPromocional = 10;
let valorPadraoBairro = 15;

switch (bairro) {
	case "Vila Peri":
	case "Maraponga":
	case "Montese":
		console.log(
			`O frete é igual a ${valorPadraoBairroPromocional * taxaPadrao}`
		);
		break;
	case "Monte Castelo":
	case "Messejana":
		console.log(`O frete é igual a ${valorPadraoBairro * taxaPadrao}`);
		break;
	default:
		console.log("Forneça uma opção válida!");
}

if (bairro === "Vila Peri" || bairro === "Maraponga" || bairro === "Montese") {
	console.log(`O frete é igual a ${valorPadraoBairroPromocional * taxaPadrao}`);
}
