const { Router } = require("express");
const express = require("express");
const routes = express.Router()

const VideoController = require("./controllers/VideoController")

routes.get("/", (req,res) => res.send("Hello World"))
routes.get("/videos", VideoController.index);
routes.post("/videos", VideoController.store);
module.exports = routes;  