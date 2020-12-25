const fs = require('fs');

const rename = (oldPath, newPath) => {
  try {
    const oldFileExists = fs.existsSync(oldPath);
    const newFileExists = fs.existsSync(newPath);

    if (newFileExists) {
      throw {
        success: false,
        message: "The file you're trying to rename to alerady exist!"
      };
    }

    if (oldFileExists) {
      fs.renameSync(oldPath, newPath);

      return {
        success: true,
        message: "The file has been renamed!"
      };
    } else {
      throw {
        success: false,
        message: "The file you're trying to rename doesn't exist!",
      };
    }
  } catch (e) {
    return e;
  }
}

rename('./new-file.txt', './create-new-file.txt');