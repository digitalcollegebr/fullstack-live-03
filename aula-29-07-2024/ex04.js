// Você está desenvolvendo um sistema para uma academia
// que precisa calcular o índice de massa corporal (IMC)
// de seus clientes com base em seus pesos e alturas. O
// sistema deve pegar um array de pesos em quilogramas e
// um array de alturas em metros, e então calcular o IMC
// para cada cliente. O IMC é calculado usando a fórmula:
//
// IMC = peso / altura ^ 2
//

const pesos = [70, 80, 90, 100];
const alturas = [1.75, 1.8, 1.65, 1.9];
// pesos[0] corresponde a alturas[0]
// ...
// pesos[3] corresponde a alturas[3]

const imcs = pesos.map((peso, index) => peso / Math.pow(alturas[index], 2));
// 70, 0
// 80, 1
// 90, 2
// 100, 3

for (let imc of imcs) {
	console.log(imc.toFixed(2));
}
