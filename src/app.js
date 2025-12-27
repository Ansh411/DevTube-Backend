import express from "express";
import cors from "cors";
import suggestRouter from "./routes/suggest.route.js";

const app = express();


app.use(cors());

app.use(express.json());


app.use("/api/suggest", suggestRouter);


app.get("/", (_, res) => {
  res.json({ status: "OK", service: "YouTube Search Proxy" });
});

export default app;
