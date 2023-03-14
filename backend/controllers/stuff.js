const Accommodate = require("../models/Accommodate");

exports.createAccommodate = (req, res, next) => {
  delete req.body._id;

  const accommodate = new Accommodate({
    ...req.body,

    cover: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
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

// exports.createAccommodate = async (req, res) => {

// 	const title = req.body.title;

// 	const imageUrl = `${req.protocol}://${host}/images/${req.file.filename}`;

// 	try{
// 		const work = await Works.create({
// 			title,
// 			imageUrl,

// 		})
// 		return res.status(201).json(work)
// 	}catch (err) {
// 		return res.status(500).json({ error: new Error('Something went wrong')})

// 	}
// }

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

exports.modifyAccommodate = (req, res, next) => {
  const accommodate = new Accommodate({
    ...req.body,
  });
  Accommodate.updateOne({ _id: req.params.id }, accommodate)
    .then(() => {
      res.status(201).json({
        message: "accommodate updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.deleteAccommodate = (req, res, next) => {
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
};

// exports.deleteAccommodate = (req, res, next) => {
//   Accommodate.deleteMany({ _id: req.params.id })
//     .then(() => {
//       res.status(200).json({
//         message: "Deleted!",
//       });
//     })
//     .catch((error) => {
//       res.status(400).json({
//         error: error,
//       });
//     });
// };
//await Character.deleteMany({ name: /Stark/, age: { $gte: 18 } });

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
