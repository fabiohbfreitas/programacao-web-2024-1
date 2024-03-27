const matriz = [
  [1, 2],
  [3, 4],
  [5, 6],
];

function mostrarMatriz(m) {
  let str = "";
  for (let l of m) {
    for (let e of l) str += `${e} `;
    str.trim();
    str += `\n`;
  }
  console.log(str);
}

function transporMatriz(m) {
  const linhas = m.length;
  const colunas = m.at(0).length;

  mostrarMatriz(m);

  const transposta = [];
  for (let i = 0; i < colunas; i += 1) {
    const nova_linha = [];
    for (let j = 0; j < linhas; j += 1) {
      const num = m.at(j).at(i);
      nova_linha.push(num);
    }
    transposta.push(nova_linha);
  }

  mostrarMatriz(transposta);

  return transposta;
}

transporMatriz(matriz);
