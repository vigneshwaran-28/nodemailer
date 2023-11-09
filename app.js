const express = require("express");
const getOtp = require("./mail");

const app = express();
app.use(express.json());

app.post("/mail", getOtp);
app.get("/", (req, res) => {
  console.log("hello");
  res.json({ ji: "hd" });
});

app.listen(6000);

// console.log("hu");
