/*

fetch(url, [options])
  .then(response => {
    // Manipular a resposta
  })
  .catch(error => {
    // Lidar com erros
  });

*/

// url: O URL do recurso que você deseja buscar.
// options: Um objeto opcional que contém as configurações
// da requisição, como o método (GET, POST, etc.), headers, body, etc.

// POST: Uma requisição POST é usada para enviar dados ao servidor,
// geralmente para criar ou atualizar um recurso.

fetch("https://jsonplaceholder.typicode.com/posts", {
	method: "POST",
	body: JSON.stringify({
		title: "Hoje tem Flamengo na altitude!",
		body: "Vale classificação na libertadores",
		userId: 1,
	}),
	headers: {
		"Content-type": "application/json; charset=UTF-8",
	},
})
	.then((response) => response.json())
	.then((json) => console.log(json));
