const fs = require("fs");

const currentDirectory = "images";
const imageDirectory = __dirname + "/" + currentDirectory;

/* recursive return quizPages. top level is going to end up being images, since any you go into you add as a quizPage.... unless:
 * 1) you skip the top level using an if somehow
 * 2) you set up the quizPage WITHIN the recursive call, e.g. at the top of the fucntion set up the quizPage object to be returned (in an array, concat all arrays at end)
 */
async function loadImages(directoryPath) {
  const dirEntries = await fs.promises.readdir(directoryPath, {
    withFileTypes: true
  });

  const options = [];
  const quizPage = {
    field: directoryPath.replace(/^.*[\\\/]/, ""),
    options: []
  };
  for (const entry of dirEntries) {
    /** create image to be save to DB, using:
     * 1) name of file w/o extenstion
     * 2) binary image data
     */
    if (entry.isFile()) {
      const nameOfFile = entry.name.replace(".png", "");
      quizPage.options.push({ name: nameOfFile });
    }
    if (entry.isDirectory()) {
      const returned = await loadImages(imageDirectory + "/" + entry.name);

      quizPage.options = quizPage.options.concat(returned);
    }
  }

  // if we are in top level recursion, don't return images field
  if (quizPage.field === currentDirectory) {
    return quizPage.options;
  }

  return [quizPage];
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
  return await loadImages(imageDirectory);
}

async function databaseLoad() {
  return await getAllFiles(imageDirectory);
}

module.exports = {
  load,
  databaseLoad
};
