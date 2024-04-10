"use strict";
import express from "express";
import { somar, subtrair, multiplicar, dividir } from "./calculadora.mjs";

const port = 8090;
const app = express();
app.use(express.json());

function validateParams(req, res, next) {
  var { a, b } = req.params;
  var a = Number(a);
  var b = Number(b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(422).send("informe dois números válidos.");
  }
  return next();
}

app.get("/somar/:a/:b", validateParams, (req, res) => {
  var { a, b } = req.params;
  var a = Number(a);
  var b = Number(b);
  return res.send(String(somar(a, b)));
});

app.get("/subtrair/:a/:b", validateParams, (req, res) => {
  var { a, b } = req.params;
  var a = Number(a);
  var b = Number(b);
  return res.send(String(subtrair(a, b)));
});

app.get("/multiplicar/:a/:b", validateParams, (req, res) => {
  var { a, b } = req.params;
  var a = Number(a);
  var b = Number(b);
  return res.send(String(multiplicar(a, b)));
});

app.get("/dividir/:a/:b", validateParams, (req, res) => {
  var { a, b } = req.params;
  var a = Number(a);
  var b = Number(b);
  if (b === 0) {
    return res.status(422).send("divisor não pode ser zero.");
  }
  return res.send(String(dividir(a, b)));
});

app.listen(port, () => {
  console.log(`Server has started in :${port}`);
});
