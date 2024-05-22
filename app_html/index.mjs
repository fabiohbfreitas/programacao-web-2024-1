import express from "express";
import mustacheExpress from "mustache-express";
import { resolve as resolvePath } from "node:path";

const app = express();
app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", resolvePath(import.meta.dirname, "views"));

app.get("/", (_, res) => {
  return res.render("index.html", { name: "Fábio" });
});
app.get("/contato", (_, res) => res.render("contato.html"));

app.listen(8090, () => {
  console.log("Server has started on :8090");
});
