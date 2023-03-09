const express = require("express");
const router = express.Router();

const stuffCtrl = require("../controllers/stuff");

router.get("/", stuffCtrl.getAllStuff);
router.post("/", stuffCtrl.createAccommodate);
router.get("/:id", stuffCtrl.getOneAccommodate);
router.put("/:id", stuffCtrl.modifyAccommodate);
router.delete("/:id", stuffCtrl.deleteAccommodate);

module.exports = router;
