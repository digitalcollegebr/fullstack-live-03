const conexaoComBancoDeDados = {
	conexaoEstaAberta: false,
	leitura: function (declaracao) {
		console.log(declaracao);
	},
	gravacao: function (declaracao) {
		console.log(declaracao);
	},
};

const bancoDeDados = {
	porta: 8080,
	abrirConexao: function () {
		console.log(`Conexão aberta com o SGBD na porta ${this.porta}`);
		conexaoComBancoDeDados.conexaoEstaAberta = true;
		return conexaoComBancoDeDados;
	},
	fecharConexao: function () {
		console.log(`Conexão com o SGBD na porta ${this.porta} foi fechada`);
		conexaoComBancoDeDados.conexaoEstaAberta = false;
		return conexaoComBancoDeDados;
	},
};

try {
	const conexao = bancoDeDados.abrirConexao();
	conexao.leitura("SELECT * FROM USERS WHERE ID = 1");
	// Retire o comentário abaixo para ver a execução do bloco catch
	// throw new Error("Bazinga!");
	console.log("A conexão está aberta: ", conexao.conexaoEstaAberta);
} catch (error) {
	console.error(`Nome do erro: ${error.name}`);
	console.error(`Mensagem do erro: ${error.message}`);
} finally {
	const conexao = bancoDeDados.fecharConexao();
	console.log("A conexão está aberta: ", conexao.conexaoEstaAberta);
}
