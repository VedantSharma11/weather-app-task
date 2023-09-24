const express = require("express");
const app = express();
const dotenv=require('dotenv');

dotenv.config();

const weatherRoute = require("./routes/weatherRoute");

app.use("/api", weatherRoute);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Weather API" });
});
app.listen(3001, () => {
  console.log("server is running");
});
