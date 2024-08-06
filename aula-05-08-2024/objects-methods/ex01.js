const civic = {
	marca: "Honda",
	modelo: "2012 1.4",
	automatico: true,
	beneficios: {
		travas: true,
		multimidia: true,
		programaParaPedagio: "Sem parar",
	},
};

// [object Object]

const chaves = Object.keys(civic);
const valores = Object.values(civic);
const entradas = Object.entries(civic);

// console.log(chaves);
// console.log(valores);
// console.log(entradas);

entradas.forEach((entrada) => {
	let chave = entrada[0];
	let valor = ehUmObjecto(entrada[1]) ? JSON.stringify(entrada[1]) : entrada[1];

	console.log(`${chave}: ${valor}`);
});

function ehUmObjecto(valor) {
	return typeof valor === "object";
}
