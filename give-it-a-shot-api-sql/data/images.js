const fs = require("fs");

const imageDirectory = __dirname + "/images";
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
      options.push({ name: nameOfFile });
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

async function getAllFiles(directoryPath) {
  const dirEntries = await fs.promises.readdir(directoryPath, {
    withFileTypes: true
  });

  const files = [];

  for (const entry of dirEntries) {
    if (entry.isFile()) {
      const nameOfFile = entry.name.replace(".png", "");
      const obj = {
        name: nameOfFile,
        image: fs.readFileSync(directoryPath + "/" + entry.name)
      };

      files.push(obj);
    } else {
      return files.concat(await getAllFiles(directoryPath + "/" + entry.name));
    }
  }

  return files;
}

// immediately loadImages
async function load() {
  await loadImages(imageDirectory);
  return quizPages;
}

load();

async function databaseLoad() {
  return await getAllFiles(imageDirectory);
}

module.exports = {
  quizPages,
  databaseLoad
};
