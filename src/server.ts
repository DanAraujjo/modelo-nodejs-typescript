import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ status: "on-line" });
});

app.listen(3333);
