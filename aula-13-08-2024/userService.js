// ES modules

// Exportação padrão: exportar apenas uma única entidade de um módulo.
export default class UserService {
	constructor(nome) {
		this.name = nome;
	}

	getName() {
		return this.name;
	}
}
