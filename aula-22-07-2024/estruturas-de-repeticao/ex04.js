let products = [
	{
		name: "Camisa G - Pollo Jeans",
		quantity: 4,
	},
	{
		name: "Camisa M - Pollo Jeans",
		quantity: 5,
	},
	{
		name: "Camisa P - Pollo Jeans",
		quantity: 12,
	},
];

const QUANTIDADE_DE_PRODUTOS_AVALIADOS_POR_DIA = products.length;
let count = 0;

while (count < QUANTIDADE_DE_PRODUTOS_AVALIADOS_POR_DIA) {
	if (products[count].quantity <= 5) {
		console.log(`O produto ${products[count].name} está abaixo do estoque.`);
	}

	count++;
}
