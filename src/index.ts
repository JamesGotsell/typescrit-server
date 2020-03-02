import express from "express";

const app = express();
const port = 9000;
const one = 1;
const two = 3;
const four = "four"
const three = "threee";
app.get("/", (_req, res) => res.send(`hello james ${one + two} and ${three} and ${four}`));
app.listen(port);

console.log(`[app] : http://localhost:${port}`);
