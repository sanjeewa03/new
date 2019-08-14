const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

var fs = require('fs');
const db = require('_helpers/db');
const Image = db.Image;

const multer  = require('multer');
const storage = multer.diskStorage({
	destination: function(req, file, cb) {
	  cb(null, './public');
	},
	filename: function(req, file, cb) {
	  cb(null,  file.originalname);
	}
  });

  const fileFilter = (req, file, cb) => {
	// reject a file
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
	  cb(null, true);
	} else {
	  cb(null, false);
	}
  };

const upload = multer({storage: storage,
	limits: {
	  fileSize: 1024 * 1024 * 5
	},
	fileFilter: fileFilter});



	router.get("/getall", (req, res, next) => {
		Image.find()
		  .select("_id productImage imgName")
		  .exec()
		  .then(docs => {
			const response = {
			  count: docs.length,
			  products: docs.map(doc => {
				return {
				  
				  productImage: doc.productImage,
				  _id: doc._id,
				  request: {
					type: "GET",
					url: "http://localhost:4000/" + doc.imgName
				  }
				};
			  })
			};
			//   if (docs.length >= 0) {
			res.status(200).json(response);
			//   } else {
			//       res.status(404).json({
			//           message: 'No entries found'
			//       });
			//   }
		  })
		  .catch(err => {
			console.log(err);
			res.status(501).json({
			  error: err
			});
		  });
	  });
	  



router.post("/", upload.single('productImage'),(req,res,next) =>{
	console.log(req);
	const product = new Image({
	_id: new mongoose.Types.ObjectId(),
	productImage: req.file.path ,
	name: req.body.name,
	tag: req.body.tags,
	imgName: req.file.originalname
});
product
.save()
.then(result => {
  //console.log(result);
  res.status(201).json({
	message: "Created product successfully"
	
  });
})
.catch(err => {
  //console.log(err);
  res.status(500).json({
	error: err
  });
});
});






module.exports = router ;