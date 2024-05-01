import express from "express";
import mustacheExpress from "mustache-express";
import { resolve as resolvePath } from "node:path"

const app = express();
app.use(express.urlencoded({ extended: true }));
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', resolvePath(import.meta.dirname, 'views'));

app.get("/", (_, res) => {
    return res.render("index.html");
});

app.post("/dados", (req, res) => {
    const { name, address, phone, date } = req.body;
    return res.render("dados.html", { name, address, phone, date });
});

app.listen(8090, () => {
    console.log("Server has started on :8090");
})