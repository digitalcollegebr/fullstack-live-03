// Utilizado quando você não sabe, de antemão, quantas vezes deseja
// que o bloco de código seja repetido e a repetição depende de uma
// condição que pode mudar dentro do loop.

const CONDICAO_DE_PARADA = 5;
let contagem = 10;

while (contagem > 0) {
	// contagem = contagem - 1;
	if (contagem === CONDICAO_DE_PARADA) {
		contagem--;
		continue;
	}

	console.log(contagem);

	contagem--;
}

console.log("Eu sou sempre executado neste programa.");
