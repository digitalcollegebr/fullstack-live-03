const usuario = {
	username: "LucasRockPlay",
	password: "palmeirasNaoTemMundi@l",
};

const novoUsuario = Object.freeze(usuario);

novoUsuario.active = true;
novoUsuario.password = "*********";

console.log(novoUsuario);
console.log(Object.isFrozen(novoUsuario));
