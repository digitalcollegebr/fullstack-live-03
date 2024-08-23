fetch("https://jsonplaceholder.typicode.com/todos")
	.then((response) => response.json())
	.then((json) => {
		console.log(json);
	});

// Solicitações HTTP:
// Arquitetura de comunicação cliente <-> servidor ("um computador solicita e outro responde")
// Protocolo de comunicação, em rede (na camada OSI), chamado HTTP

// HTTP
// Requisições: solicitação, em rede, que vai atender as definições do protocolo em questão
// Respostas: resposta, em rede, que vai atender as definições do protocolo em questão
// Definições: cabelhos e corpos -> metadados e dados sobre um ciclo de requisição e resposta
