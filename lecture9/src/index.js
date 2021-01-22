const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// const usersRouters = require('./users/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(usersRouters);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT} port`);
});
