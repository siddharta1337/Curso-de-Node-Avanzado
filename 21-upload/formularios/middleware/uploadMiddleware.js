const multer = require("multer");
const extension = require("../classes/MimeTypes");

var path = require("path");


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../", "public/done"));
  },
  filename: function (req, file, cb) {
    const ext = new extension();
    cb(
      null,
      file.fieldname + "-" + Date.now() + ext.getExtension(file.mimetype)
    );
  }
});

const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024
  },
  dest: path.join(__dirname, "../", "public"),
  storage: storage
});

module.exports = upload;
