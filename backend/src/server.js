import express from "express";
const app = express();

import { ENV } from "./config/env.js";
import connectToDB from "./utils/db.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.send("Home route");
});

app.listen(ENV.PORT, async () => {
  console.log(`server is running on PORT:${ENV.PORT}`);
  await connectToDB();
});
