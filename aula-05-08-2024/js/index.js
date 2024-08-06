const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", function (evento) {
	const titulo = frm.inTitulo.value;
	const duracao = Number(frm.inDuracao.value);

	// Regra de negócio
	const horas = Math.floor(duracao / 60);
	const minutos = duracao % 60;

	// Saída do programa
	resp1.innerText = titulo;
	resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;

	evento.preventDefault();
});

// 1.2456 -> 1
// 2.566 -> 2
