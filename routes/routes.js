const express = require("express");
const routes = express.Router();
const TaskController = require("../controller/TaskController");

routes.get("/", TaskController.getAll);

module.exports = routes;
