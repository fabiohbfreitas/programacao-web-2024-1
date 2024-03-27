const express = require("express");

const app = express();
const port = 9091;

app.get("/", (_req, res) => {
    return res.send("Hello, world!");
})

app.listen(port, () => {
    console.log("Server has started...");
});
