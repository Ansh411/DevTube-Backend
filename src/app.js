import express from "express";
import cors from "cors";
import suggestRouter from "./routes/suggest.route.js";

const app = express();


app.use(cors());

app.use(express.json());


app.use("/api/search", suggestRouter);


app.get("/health", (_, res) => {
  res.send("YouTube Search Proxy");
});

export default app;
