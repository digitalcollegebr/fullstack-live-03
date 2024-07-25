const PETR4 = [45.9, 43.9, 47.9, 45.8, 45.2, 43.9, 48.9, 46.9];
const HOURS = [
	"10:00",
	"11:00",
	"12:00",
	"13:00",
	"14:00",
	"15:00",
	"16:00",
	"17:00",
];
const VALID_RANGE = 8;

console.log(
	`A ação PETR4 teve o seguinte comportamento dentro do intervalo de ${VALID_RANGE} horas:`
);
for (let i = 0; i < VALID_RANGE; i++) {
	console.log(`${HOURS[i]} - R$ ${PETR4[i].toFixed(2)}`);
}
