/*

Você está desenvolvendo um sistema de e-commerce que precisa exibir as informações básicas 
de um cliente quando ele acessa sua conta. Os dados do cliente são armazenados em um objeto, 
e você precisa extrair apenas o nome e o e-mail para exibi-los na tela.

*/

const cliente = {
	nome: "Maria Silva",
	idade: 28,
	email: "maria.silva@exemplo.com",
	endereco: {
		cidade: "São Paulo",
		estado: "SP",
	},
};

const { nome, email } = cliente;

console.log(`Bem-vinda, ${nome}!`);
console.log(`Seu e-mail é: ${email}`);
