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

export function listarProdutos() {
  return produtos;
}

export function removerProduto(id) {
  produtos = produtos.filter((p) => p.id !== id);
}
