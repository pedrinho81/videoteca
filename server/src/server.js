const express = require("express");
require("dotenv").config()

const routes = require("./routes");
const connectToDatabase = require("./database");
const cors = require("cors")

connectToDatabase();

const app = express();
const port = process.env.PORT || 3333;

app.use(cors())
app.use(express.json());
app.use(routes);


app.listen(port, () => console.log(`⚡ Backend started at http://localhost:${port}`));