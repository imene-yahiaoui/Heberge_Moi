const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");
const AccommodateCtrl = require("../controllers/accommodate");

router.get("/", AccommodateCtrl.getAllAccommodate);
router.post("/", auth, multer, AccommodateCtrl.createAccommodate);
router.get("/:id", AccommodateCtrl.getOneAccommodate);
router.put("/:id", auth, multer, AccommodateCtrl.modifyAccommodate);
router.delete("/:id", auth, AccommodateCtrl.deleteAccommodate);

module.exports = router;
