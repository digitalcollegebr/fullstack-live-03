// OPERADORES MAIOR OU IGUAL QUE, MENOR OU IGUAL QUE

let numeroDaSorte = 450;
let numeroEnviadoPeloJogador = 450;

console.log("MAIOR QUE");
console.log(numeroDaSorte >= numeroEnviadoPeloJogador);

console.log("MENOR QUE");
console.log(numeroDaSorte <= numeroEnviadoPeloJogador);

console.log("EXEMPLO PRÁTICO");

let precoDoProdutoA = 1050.0;
let precoDoProdutoB = 50.0;
let precoDoProdutoC = 400.0;
let totalAPagarSemDesconto =
	precoDoProdutoA + precoDoProdutoB + precoDoProdutoC;

let menorPrecoParaConcederDesconto = 1500.0;

console.log(totalAPagarSemDesconto >= menorPrecoParaConcederDesconto);
