const express = require("express");
const router = express.Router();
const controller = require("../controller/colaboradoresController");

router.get("/", controller.getAllColaborador);
router.get("/:id", controller.getByIdColaborador);
router.post("/", controller.postColaborador);
router.delete("/:id", controller.deleteColaborador);
router.put("/:id", controller.putColaborador);
router.patch("/:id", controller.patchColaborador);

module.exports = router;
