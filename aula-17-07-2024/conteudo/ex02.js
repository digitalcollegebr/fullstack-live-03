// else if: Permite testar múltiplas condições.
// Se a condição no if inicial for falsa, o programa
// avalia a condição no else if.

// Exemplo inicial

// let notaAluno = 6;

// if (notaAluno === 9 || notaAluno === 10) {
// 	console.log("Uhuul! Mandou muito bem!");
// } else if (notaAluno >= 6 && notaAluno <= 8) {
// 	console.log("Boa nota! Continue nesse caminho!");
// } else if (notaAluno >= 3 && notaAluno < 6) {
// 	console.log("Você tem que estudar mais!");
// } else {
// 	console.log("A coisa está feia!");
// }

// Exemplo prático

let temONomeSujo = false;
let temFaturasAtrasadasHaMaisde15Dias = false;
let rendaBrutaCadastrada = 4500.0;

if (
	!temONomeSujo &&
	!temFaturasAtrasadasHaMaisde15Dias &&
	rendaBrutaCadastrada >= 12000
) {
	console.log("O seu score é igual a 1000!");
} else if (
	!temONomeSujo &&
	!temFaturasAtrasadasHaMaisde15Dias &&
	!rendaBrutaCadastrada <= 5000
) {
	console.log("O seu score é igual a 850!");
} else {
	console.log("O seu score é igual a 450!");
}
