// Function Expression
const multiplicar = function (num1, num2) {
	return num1 * num2;
};

let meuNum1 = 5;
let meuNum2 = 6;

console.log(
	`O produto entre ${meuNum1}x${meuNum2} = ${multiplicar(meuNum1, meuNum2)}`
);

// Function Declaration
function ehPar(numero) {
	return numero % 2 === 0;
}

console.log(`É par: ${ehPar(6)}`);
console.log(`É par: ${ehPar(7)}`);

// Function Expression
const diferenca = function (num1, num2) {
	return num1 - num2;
};

console.log(`A diferença é: ${diferenca(6, 3)}`);
