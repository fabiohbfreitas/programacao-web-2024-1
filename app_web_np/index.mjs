import express from "express";
import pino from "pino-http";
import { isNumberPrime } from "./util.mjs";

const port = 8090;
const app = express();

app.use(express.json());
app.use(
  pino({
    transport: {
      target: "pino-pretty",
    },
  }),
);
app.get("/", (request, response) => {
  request.log.info("hey");
  return response.json({ date: Date.now() });
});
app.get("/hello/:name", (request, response) => {
  const name = request.params.name;
  return response.json({ hello: `Hello ${name}` });
});
app.get("/is-prime/:n", (request, response) => {
  const n = Number(request.params.n);
  return response.json({ n, isPrime: isNumberPrime(n) });
});
app.listen(port, () => {
  console.log(`info: Server is running on :${port}`);
});
