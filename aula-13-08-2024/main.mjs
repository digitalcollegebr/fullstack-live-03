// ES modules

import { sayHi } from "./sayHi.mjs";

console.log(sayHi("Neto"));

// Importação nomeada
import { veiculosDisponiveisParaVenda } from "./veiculo/veiculo.mjs";

// Importação com alias (apelido)
import { carrinhoDeCompra as carrinho } from "./carrinhoDeCompra/carrinhoDeCompra.mjs";

// Importação padrão
import fazerPedido from "./pedido/pedido.mjs";

const veiculoEscolhido = fazerPedido(veiculosDisponiveisParaVenda, 1)[0];
const usuario = "Calonne";

const menssagem = carrinho(usuario, veiculoEscolhido);

console.log(menssagem);
