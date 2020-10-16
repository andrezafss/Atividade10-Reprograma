const express = require("express");
const router = express.Router();
const controller = require("../controller/colaboradoresController");

router.get("/", controller.getAllColaborador);
router.get("/:id", controller.getByIdColaborador);
router.post("/", controller.postColaborador);
router.delete("/:id", controller.deleteColaborador);

module.exports = router;
