// ES modules

// Exportação nomeada: exportar múltiplas entidades em um mesmo módulo

export const PI = 3.14;

export function sayHi(user) {
	return `Olá, ${user}!`;
}

export class Calculadora {
	multiplicar(a, b) {
		return a * b;
	}
}
