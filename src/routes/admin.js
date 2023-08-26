const express = require("express");
const route = express.Router();
const adminController = require("../controllers/adminController");
/* const multer = require("multer"); */

/* localhost:2020/administrador */
route.get("/", adminController.getAll);
route.get("/formCreate", adminController.create);
route.post("/formCreate", adminController.store);

module.exports = route;
