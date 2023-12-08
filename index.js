require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

app.use(cors());

mongoose.connect(DB_URL).then(()=>{
  console.log("Database connected")
})

const indexRouter = require("./routes");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.json());

app.use("/", indexRouter);

app.get('/logout', (req, res) => {
  res.redirect('/');
});

app.use((err, req, res, next) => {
  err = err ? err.toString() : "Something went wrong";
  res.status(500).json({ data: "", msg: err });
});

app.listen(PORT, () => {
  console.log("App is running on port 5555");
});
