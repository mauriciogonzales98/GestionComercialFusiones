const express = require("express");
const app = express();

app.set("view engine", "ejs")

const weaRouter = require("./routes/wea");

app.use("/wea", userRouter)

app.listen(3000)