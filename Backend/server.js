const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const apiHandler = require("./routes");

dotenv.config();

//Connect to DB
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("> Connected to DB..."))
  .catch((err) => console.log(err));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router Middleware
app.use("/api", apiHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`> Read on http://localhost:${PORT}`);
});
