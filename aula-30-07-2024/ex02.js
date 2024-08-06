let total = 0;
const valoresDasVendas = [123, 456.9, 347.8, 12.99, 99.45, 780];

for (let i = 0; i < valoresDasVendas.length; i++) {
	total += valoresDasVendas[i]; // total = total + valoresDasVendas[i];
}

console.log(
	`O total das vendas realizadas em um dia foi R$ ${total.toFixed(2)}`
);

// O método reduce aplica uma função contra um acumulador
// e cada elemento do array (da esquerda para a direita)
// para reduzi-lo a um único valor.

let soma = valoresDasVendas.reduce((acc, valor) => acc + valor, 0);

console.log(
	`O total das vendas realizadas em um dia foi R$ ${soma.toFixed(2)}`
);

// Para a 1º execução:
// acc = 0 e valor = 123
// Para a 2º execução:
// acc = 123 e valor = 456.9
// Para a 3º execução:
// acc = 579.9 e valor = 347.8
// Para a 4º execução:
// acc = 927,7 e valor = 12.99
