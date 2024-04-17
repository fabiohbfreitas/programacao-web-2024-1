import express from "express";
import * as estoque from "./estoque.mjs";

const port = 8090;
const app = express();

app.use(express.json());

app.get("/adicionar/:id/:nome/:qtd", (req, res) => {
  const { id, nome, qtd } = req.params;

  const prod = estoque.criarProduto(id, nome, qtd);
  return res.send(prod);
});

app.get("/listar", (_, res) => {
  const prods = estoque.listarProdutos();
  return res.send(prods);
});

app.get("/remover/:id", (req, res) => {
  const { id } = req.params;

  estoque.removerProduto(id);
  return res.status(204).send();
});

app.get("/editar/:id/:qtd", (req, res) => {
  const { id, qtd } = req.params;
  estoque.editarProduto(id, qtd);
  return res.send();
});

app.listen(port, () => {
  console.log(`Sever started on ${port}`);
});
