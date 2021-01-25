const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const hat = require('hat');

const usersDb = require('./db/users.json');

const app = express();
const PORT = process.env.PORT || 3000;

const relativePathToUsersFile = path.join(__dirname, '.', 'db', 'users.json'); // ./db/users.json

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

  // id: String(usersDb.length + 1),
  const requestPayload = {
    id: hat(),
    firstName,
    lastName,
    username
  }

  usersDb.push(requestPayload);

  fs.writeFileSync(relativePathToUsersFile, JSON.stringify(usersDb, null, 2));

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

  const { id } = req.params; // req.params.id

  const userIndex = usersDb.findIndex(user => user.id === id);

  if (userIndex > -1) {
    if (req.body.id) {
      res.send({ error: "Id cann't be overwritten." });
    } else {
      const toUpdateData = {
        id,
        firstName,
        lastName,
        username
      }
      usersDb[userIndex] = toUpdateData;

      fs.writeFileSync(relativePathToUsersFile, JSON.stringify(usersDb, null, 2));

      res.send({ body: usersDb });
    }
  } else {
    res.send({ error: `User ${id} is not found.`});
  }
});

// Delete
app.delete('/users/:id', (req, res) => {
  // Напишете го остатокот од фунцијата која што треба да овозможи бришење на корисник според внесениот id

  const { id } = req.params;
  const userIndex = usersDb.findIndex(user => user.id === id); // 0, 1, 2, 3, 4, 5, .. N-1, N = array.length

  if (userIndex > -1) {
    usersDb.splice(userIndex, 1); // [1, 2, 3, 4, 5, 6, 7].splice(5, 1);

    fs.writeFileSync(relativePathToUsersFile, JSON.stringify(usersDb, null, 2));

    res.send({ body: `User ${id} has been removed.`});
  } else {
    res.send({ error: `User ${id} is not found.`});
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT} port`);
});
