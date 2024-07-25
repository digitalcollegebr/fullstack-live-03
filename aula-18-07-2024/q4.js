/*
90 a 100: "A"
80 a 89: "B"
70 a 79: "C"
60 a 69: "D"
Menos de 60: "F"
*/

let nota = 70.5;

if (nota >= 90) {
	console.log("A");
} else if (nota >= 80) {
	console.log("B");
} else if (nota >= 70) {
	console.log("C");
} else if (nota >= 60) {
	console.log("D");
} else {
	console.log("F");
}
