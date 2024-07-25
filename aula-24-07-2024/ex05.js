// Arrow Function
const ehPositivo = (num1) => {
	return num1 > 0;
};

console.log(`É um número positivo: ${ehPositivo(-4)}`);
console.log(`É um número positivo: ${ehPositivo(26)}`);

const quadrado = (num1) => {
	return num1 * num1;
};

console.log(`O quadrado do número é: ${quadrado(5)}`);
console.log(`O quadrado do número é: ${quadrado(144)}`);

const saudacao = (nomeDaPessoa) => `Olá, ${nomeDaPessoa}!`;

console.log(saudacao("Felipe"));
