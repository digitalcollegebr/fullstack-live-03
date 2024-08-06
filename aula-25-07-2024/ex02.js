// Escopo de variáveis: é até onde uma variável é vista pela JavaScript
let banana = 56; // Eu não tenho nada haver com as funções somar e multiplicar
let melancia = 89; // Eu não tenho nada haver com as funções somar e multiplicar
let variavelC = 20; // Eu não tenho nada haver com as funções somar e multiplicar

// Eu não tenho nada haver com as variáveis das linhas 2 e 3
function somar(variavelA, variavelB) {
	return variavelA + variavelB;
}

console.log(somar(banana, melancia));
