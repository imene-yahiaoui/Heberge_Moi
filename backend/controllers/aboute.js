const Aboute = require("../models/Aboute");
const fs = require("fs");

exports.createAboute = (req, res, next) => {
  delete req.body._id;

  const aboute = new Aboute({
    ...req.body,
  });

  aboute
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getOneAboute = (req, res, next) => {
  Aboute.findOne({
    _id: req.params.id,
  })
    .then((thing) => {
      res.status(200).json(thing);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.modifyAboute = (req, res, next) => {
  const aboute = new Aboute({
    title: req.body.title,
    text: req.body.description,
  });
  Aboute.updateOne({ _id: req.params.id }, aboute)
    .then(() => {
      res.status(201).json({
        message: "Thing updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.deleteAboute = (req, res, next) => {
  Aboute.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Deleted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getAllAboute = (req, res, next) => {
  Aboute.find()
    .then((aboute) => {
      res.status(200).json(aboute);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
