const express = require("express");
const routes = require("./routes");
const cors = require("cors");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json()); 

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
