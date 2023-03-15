const Accommodate = require("../models/Accommodate");
const fs = require("fs");

exports.createAccommodate = (req, res, next) => {
  delete req.body._id;

  const accommodate = new Accommodate({
    ...req.body,

    cover: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    pictures: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });

  accommodate
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

exports.getOneAccommodate = (req, res, next) => {
  Accommodate.findOne({
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

// exports.modifyAccommodate = (req, res, next) => {
//   const accommodateObject = req.file ?{
//     ...JSON.parse(req.body.accommodate),
//      cover: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
// } : { ...req.body };

//   Accommodate.updateOne({ _id: req.params.id }, accommodate)
//     .then(() => {
//       res.status(201).json({
//         message: "accommodate updated successfully!",
//       });
//     })
//     .catch((error) => {
//       res.status(400).json({
//         error: error,
//       });
//     });
// };

exports.modifyAccommodate = (req, res, next) => {
  const accommodateObject = req.file
    ? {
        ...JSON.parse(req.body.accommodate),
        cover: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  delete accommodateObject._userId;
  Accommodate.findOne({ _id: req.params.id })
    .then((accommodate) => {
      Accommodate.updateOne(
        { _id: req.params.id },
        { ...accommodateObject, _id: req.params.id }
      )
        .then(() => res.status(200).json({ message: "Objet modifié!" }))
        .catch((error) => res.status(401).json({ error }));
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteAccommodate = (req, res, next) => {
  Accommodate.findOne({ _id: req.params.id })
    .then((accommodate) => {
      const filename = accommodate.cover.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Accommodate.deleteOne({ _id: req.params.id })
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
      });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.getAllStuff = (req, res, next) => {
  Accommodate.find()
    .then((accommodates) => {
      res.status(200).json(accommodates);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
