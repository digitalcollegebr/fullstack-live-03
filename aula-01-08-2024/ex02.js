class Pessoa {
	static MENSAGEM_SAUDACAO = "Olá, meu nome é ";

	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}

	saudacao(nomeOutraPessoa) {
		return (
			Pessoa.MENSAGEM_SAUDACAO + `${this.nome}! Tudo bem, ${nomeOutraPessoa}?`
		);
	}
}

let arrascaeta = new Pessoa("Arrascaeta", 28); // instanciação
let neto = new Pessoa("Neto", 25); // instanciação

console.log(arrascaeta.nome);
console.log(neto.nome);

console.log(arrascaeta.saudacao("Fernando"));
console.log(neto.saudacao("Luis"));

console.log(Pessoa.MENSAGEM_SAUDACAO);
