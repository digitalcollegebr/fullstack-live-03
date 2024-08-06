// Função construtora
function Pessoa(nome, idade, cursoSuperior) {
	this.nome = nome;
	this.idade = idade;
	this.cursoSuperior = cursoSuperior;
}

let neto = new Pessoa("Neto", 25, true);
let calonne = new Pessoa("Calonne", 24, true);

console.log(neto);
console.log(neto.idade);
console.log(neto["idade"]);
console.log(calonne);

function ProdutoDeHigiene(peso) {
	this.peso = peso;
}
