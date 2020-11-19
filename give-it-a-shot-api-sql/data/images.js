const fs = require("fs");

const imageDirectory = __dirname + "/images";
const databaseImages = [];
const liquorOptions = [];

fs.readdir(imageDirectory, function(err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  files.forEach(function(file) {
    /** create image to be save to DB, using:
     * 1) name of file w/o extenstion
     * 2) binary image data
     */
    const nameOfFile = file.replace(".png", "");
    const image = {
      name: nameOfFile,
      image: fs.readFileSync(imageDirectory + "/" + file)
    };

    liquorOptions.push({ name: nameOfFile });
    databaseImages.push(image);
  });

  console.log(liquorOptions);
  console.log(databaseImages);
});

module.exports = {
  liquorOptions,
  databaseImages
};
