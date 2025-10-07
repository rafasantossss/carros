export let carros = [];

export function adicionarCarro(novoCarro) {
  carros.push(novoCarro);
}

export function limparCarros() {
  carros = [];
}
