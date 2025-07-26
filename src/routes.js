const { Router } = require("express");
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");


const routes = Router();

routes.get("/", (req, res) => {
  res.send("Hello World!");
});

routes.use("/auth", authRoutes);
routes.use("/users", userRoutes);

module.exports = routes;
