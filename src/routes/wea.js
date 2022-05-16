const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

router.get("/wea", (req, res) =>{
    res.send("Costo fijo");
})