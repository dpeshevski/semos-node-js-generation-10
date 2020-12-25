const fs = require('fs');

// fs.existsSync()
// fs.exists();

const create = (filePath, content) => {
  try {
    const fileExists = fs.existsSync(filePath);

    if (fileExists) {
      throw {
        success: false,
        message: 'The file already exist!'
      };
    } else {
      fs.writeFileSync(filePath, content);
      return {
        success: true,
        message: 'The file has been created!'
      };
    }
  } catch (error) {
    return error;
  }
};

create('./create-file.txt', 'Hello');