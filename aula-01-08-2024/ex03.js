const pessoa = {
	nome: "Neris",
	idade: 30,
	cadastroCompleto: false,
	cadastroAtualizado: false,
};

for (let prop in pessoa) {
	console.log(pessoa[prop]);
}

const chaves = Object.keys(pessoa); // recuperar as propriedades (chaves)

console.log(chaves);

Object.keys(pessoa).forEach((chave) => {
	let valor = pessoa[chave];

	console.log(`${chave}: ${valor}`);
});

for (let prop in pessoa) {
	if (prop === "cadastroCompleto") {
		if (pessoa[prop] === true) {
			console.log("Usuário com cadastro completo!");
		} else {
			console.log("Usuário precisa cadastrar os dados faltantes!");
		}
	}
}
