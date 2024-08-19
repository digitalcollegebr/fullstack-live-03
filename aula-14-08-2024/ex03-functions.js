// Desestruturação de arrays em funções

function printCoordernadas([x, y, z]) {
	console.log(`X: ${x}, Y: ${y}, Z: ${z}`);
}

printCoordernadas([23, 78, 23]);

// Desestruturação de objetos em funções

function printPessoa({ name, age }) {
	console.log(`Name: ${name}, Age: ${age}`);
}

printPessoa({ name: "Lucas", age: 30 });
