const meses = [
	"Janeiro", // 0
	"Fevereiro", // 1
	"Março",
	"Abril",
	"Maio",
	"Junho",
	"Julho",
	"Agosto",
	"Setembro",
	"Outubro",
	"Novembro",
	"Dezembro", // 11
];

function digito(num) {
	if (num >= 1 && num <= 12) {
		let index = num - 1;

		console.log(
			`O número digitado foi ${num} e o mês correspondente é ${meses[index]}.`
		);
	} else {
		console.log("Número inválido");
	}
}

digito(0);
digito(1);
digito(2);

/*
 Linha 17. O digito 1 é maior ou igual a 1? Sim. Ele é menor ou igual a 12? Sim.
 Linha 18. O index vai ser igual a 1 - 1 = 0.
 Linha 21. num é igual a 1. meses[index] = meses[0] = Janeiro.
 Linha 29. O número digitado foi 1 e o mês correspondente é Janeiro.
*/
