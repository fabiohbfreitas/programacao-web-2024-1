let produtos = [];

function adicionarProduto(p) {
  produtos.push(p);
}

export function criarProduto(id, nome, qtd) {
  const prod = {
    id,
    nome,
    qtd,
  };
  adicionarProduto(prod);
  return prod;
}

export function editarProduto(id, qtd) {
  let found = produtos.find((p) => p.id === id);
  if (found) {
    let idx = produtos.indexOf(found);
    if (idx === -1) return;
    produtos[idx].qtd = qtd;
  }
}

export function listarProdutos() {
  return produtos;
}

export function removerProduto(id) {
  produtos = produtos.filter((p) => p.id !== id);
}
