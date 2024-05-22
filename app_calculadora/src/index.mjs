import express from "express";
import mustacheExpress from "mustache-express";
import { resolve as resolvePath } from "node:path";

const app = express();
app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", resolvePath(import.meta.dirname, "view"));
console.log(resolvePath(import.meta.dirname, "view", "partials"));
app.engine(
  "html",
  mustacheExpress(
    resolvePath(import.meta.dirname, "view", "partials"),
    ".html",
  ),
);

app.get("/", (_, res) => res.render("index.html"));

app.listen(8090, () => {
  console.log("server has started :8090");
});
