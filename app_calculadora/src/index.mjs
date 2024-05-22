import express from "express";
import mustacheExpress from "mustache-express";
import { resolve as resolvePath } from "node:path";
import { router } from "./routes/router.mjs";

const app = express();
app.use(express.urlencoded({ extended: true }));
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

app.use(router);

app.listen(8090, () => {
  console.log("server has started :8090");
});
