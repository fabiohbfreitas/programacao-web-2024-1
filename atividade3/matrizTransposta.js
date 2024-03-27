const matriz = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(matriz);

function transporMatriz(m) {
  const linhas = m.length;
  const colunas = m.at(0).length;
  //console.log({ linhas, colunas });

  const transposta = [];

  for (let i = 0; i < colunas; i += 1) {
    const nova_linha = [];
    for (let j = 0; j < linhas; j += 1) {
      const num = m[j][i];
      nova_linha.push(num);
    }
    transposta.push(nova_linha);
  }
  //console.log(transposta);

  return transposta;
}

console.log(transporMatriz(matriz));
