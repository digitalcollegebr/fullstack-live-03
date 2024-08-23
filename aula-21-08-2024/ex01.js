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

// Para ver o erro acontecendo mude a url para o valor abaixo
// https://jsonplaceholder.typicode.com/FLAMENGO

// GET: O exemplo mais básico de fetch é uma requisição GET, que busca dados de um servidor.

fetch("https://jsonplaceholder.typicode.com/posts/1")
	.then((response) => {
		if (!response.ok) {
			throw new Error("Erro na requisição: " + response.statusText);
		}

		return response.json();
	})
	.then((data) => {
		console.log(data);

		document.querySelector("#post-title").textContent = data.title;
		document.querySelector("#post-body").textContent = data.body;
	})
	.catch((error) => {
		console.error("Houve um problema com a requisição: ", error);

		document.querySelector("#error").textContent =
			"Puxa! Tente novamente mais tarde :(";
	});
