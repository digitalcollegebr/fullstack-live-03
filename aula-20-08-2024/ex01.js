fetch("https://jsonplaceholder.typicode.com/todos")
	.then((response) => response.json())
	.then((json) => {
		// const todos = JSON.parse(json);
		console.log(json);
		// console.log(todos);
	});
