const express = require('express');
const bodyParser = require('body-parser');

const indexRouter = require('./router/index');

const app = express();
const PORT = process.env.PORT || 3000;

// const usersRouters = require('./users/routes');
// const clientsRouters = require('./clients/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(usersRouters);
// app.use(clientsRouters);
app.use(indexRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT} port`);
});
