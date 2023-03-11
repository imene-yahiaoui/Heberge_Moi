const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const stuffCtrl = require("../controllers/stuff");

router.get("/", stuffCtrl.getAllStuff);
router.post("/", auth, stuffCtrl.createAccommodate);
router.get("/:id", stuffCtrl.getOneAccommodate);
router.put("/:id", auth, stuffCtrl.modifyAccommodate);
router.delete("/:id", auth, stuffCtrl.deleteAccommodate);

module.exports = router;
