const fs = require('fs');

const read = filePath => {
  try {
    const fileExists = fs.existsSync(filePath);

    if (fileExists) {
      const content = fs.readFileSync(filePath, 'utf8');

      return {
        success: true,
        data: content
      };
    } else {
      throw {
        success: false,
        message: "The file doesn't exist!"
      };
    }
  } catch (e) {
    return e;
  }
};

const readContent = read('./create-file-3333.txt');
console.log(readContent); // Error { success: false, message: "The file doesn't exist!" }

const readContent1 = read('./create-file.txt');
console.log(readContent1);
