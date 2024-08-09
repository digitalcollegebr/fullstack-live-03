const paragrafo = document.createElement("p");
const textoDoParagrafo = document.createTextNode(
	"O Flamengo é o time quebra pacto!"
);

paragrafo.appendChild(textoDoParagrafo);

const container = document.querySelector("#container");

container.classList.add(".container");

container.appendChild(paragrafo);

const link = document.createElement("a");

link.style.display = "block";

link.setAttribute("href", "https://www.flamengo.com.br/");
link.setAttribute("target", "_blank");
link.setAttribute(
	"title",
	"Clique para conhecer o site do clube das américas!"
);

link.textContent = "Visite o site do Flamengo";

container.appendChild(link);

const imagemFutebol = document.createElement("img");

imagemFutebol.src = "./assets/futebol.jpg";
imagemFutebol.alt = "Grupo de amigos jogando futebol";
imagemFutebol.width = 300;
imagemFutebol.height = 200;

container.appendChild(imagemFutebol);

const novaDiv = document.createElement("div");

novaDiv.style.backgroundColor = "lightgreen";
novaDiv.style.width = "200px";
novaDiv.style.height = "100px";
novaDiv.style.border = "1px solid black";
novaDiv.style.padding = "10px";
novaDiv.style.margin = "10px auto";
novaDiv.style.textAlign = "center";

const textoDaNovaDiv = document.createTextNode(
	"Esta é uma nova div com estilos inline."
);

novaDiv.appendChild(textoDaNovaDiv);

container.appendChild(novaDiv);

const outraDiv = document.createElement("div");

outraDiv.classList.add("meu-estilo");

const textDaOutraDiv = document.createTextNode(
	"Esta é uma nova div estilizada com o auxílio de um arquivo css."
);

outraDiv.appendChild(textDaOutraDiv);

container.appendChild(outraDiv);
