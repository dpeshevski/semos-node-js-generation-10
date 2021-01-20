const express = require('express');
const bodyParser = require('body-parser');

const usersDb = require('./db/users.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CRUD operation (Create, Read, Update, Delete)
// HTTP Methods (POST, GET, PUT, DELETE)

// List
app.get('/users', (req, res) => {
  res.send({ body: usersDb });
})

// Get
app.get('/users/:id', (req, res) => {
  const { id } = req.params;

  const isFound = usersDb.findIndex(user => user.id === id) > -1;

  if (isFound) {
    const foundUser = usersDb.find(user => user.id === id);
    res.send({ body: foundUser });
  } else {
    res.send({ error: `User ${id} is not found.`});
  }
});

// Create
app.post('/users', (req, res) => {
  const {
    firstName,
    lastName,
    username
  } = req.body;

  const requestPayload = {
    id: String(usersDb.length + 1),
    firstName,
    lastName,
    username
  }

  usersDb.push(requestPayload);

  res.send({ body: usersDb });
})

// Update
app.put('/users/:id', (req, res) => {
  const {
    firstName,
    lastName,
    username
  } = Object.assign({}, req.body);

  // Напишете го остатокот од фунцијата која што треба да овозможи ажурирање на податоците на корисникот според внесениот id
  // Овозможете проверка на валидација кој што треба да врати грешка доколку корисникот не постои со внесеното id, во спротивно,
  // да овозможи ажурирање
});

// Delete
app.delete('/users/:id', (req, res) => {
  // Напишете го остатокот од фунцијата која што треба да овозможи бришење на корисник според внесениот id
});


app.listen(PORT, () => {
  console.log(`Listening on ${PORT} port`);
})
