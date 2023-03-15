const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only JPEG and PNG are allowed!"), false);
  }
};

const pictures = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB max
  },
  fileFilter: fileFilter,
}).array("files", 10); // "files" est le nom du champ input du formulaire qui permet l'upload

module.exports = { pictures};
