const fs = require("fs");

const imageDirectory = __dirname + "/images";
const databaseImages = [];
const quizPages = [];

async function loadImages(directoryPath) {
  const dirEntries = await fs.promises.readdir(directoryPath, {
    withFileTypes: true
  });

  console.log(dirEntries);

  const options = [];
  for (const entry of dirEntries) {
    /** create image to be save to DB, using:
     * 1) name of file w/o extenstion
     * 2) binary image data
     */
    if (entry.isFile()) {
      const nameOfFile = entry.name.replace(".png", "");
      const image = {
        name: nameOfFile,
        image: fs.readFileSync(directoryPath + "/" + entry.name)
      };
      options.push({ name: nameOfFile });
      databaseImages.push(image);
    }
    if (entry.isDirectory()) {
      const quizPage = {
        field: entry.name,
        options: []
      };

      quizPage.options = await loadImages(
        imageDirectory + "/" + entry.name,
        quizPage.options
      );

      quizPages.push(quizPage);
    }
  }

  return options;
}

async function load() {
  await loadImages(imageDirectory);
  console.log(quizPages);
  return databaseImages;
}

module.exports = {
  load
};
