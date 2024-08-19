export default function fazerPedido(veiculos, idDoVeiculo) {
	return veiculos.filter((veiculo) => veiculo.id === idDoVeiculo);
}
