import { evaluateOperation, opsAvailable } from "../calculator/index.mjs";

export function index(_, res) {
  return res.render("index.html");
}

export function post(req, res) {
  var { v1, op, v2 } = req.body;
  var v1 = Number(v1);
  var v2 = Number(v2);

  if (isNaN(v1) || isNaN(v2)) {
    return res.render("index.html", { error: "Informe dois números válidos." });
  }

  if (!opsAvailable.includes(op)) {
    return res.render("index.html", { error: "Operação desconhecida." });
  }

  if (op === "/" && v2 === 0) {
    return res.render("index.html", {
      error: "Não é possível fazer divisão por zero.",
      v1,
      v2,
      op,
    });
  }

  const result = evaluateOperation(op, v1, v2);

  return res.render("resultado.html", { v1, v2, op, result });
}
