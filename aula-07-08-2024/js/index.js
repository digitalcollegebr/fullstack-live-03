const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (evento) => {
	const nome = frm.inNome.value;
	const masculino = frm.inMasculino.checked;
	const altura = Number(frm.inAltura.value);

	let peso = 0;

	if (masculino) {
		peso = 22 * Math.pow(altura, 2);
	} else {
		peso = 21 * Math.pow(altura, 2);
	}

	resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`;

	evento.preventDefault();
});

frm.addEventListener("reset", () => {
	resp.innerText = "";
});
