const express = require("express");
const router = express.Router();
// const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");
const AbouteCtrl = require("../controllers/aboute");

router.get("/", AbouteCtrl.getAllAboute);
router.post("/", auth, AbouteCtrl.createAboute);
router.get("/:id", AbouteCtrl.getOneAboute);
router.put("/:id", auth, AbouteCtrl.modifyAboute);
router.delete("/:id", auth, AbouteCtrl.deleteAboute);

module.exports = router;
