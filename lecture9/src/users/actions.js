const usersDb = require('../db/users.json');

async function list(req, res, next) {
  res.send({ body: usersDb });

  await next;
}

async function get(req, res, next) {
  const { id } = req.params;

  const isFound = usersDb.findIndex(user => user.id === id) > -1;

  if (isFound) {
    const foundUser = usersDb.find(user => user.id === id);
    res.send({ body: foundUser });
  } else {
    res.send({ error: `User ${id} is not found.`});
  }

  await next;
}

async function create(req, res, next) {
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

  await next;
}

async function update(req, res, next) {
  const {
    firstName,
    lastName,
    username
  } = Object.assign({}, req.body);

  const { id } = req.params;

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

      res.send({ body: usersDb });
    }
  } else {
    res.send({ error: `User ${id} is not found.`});
  }

  await next;
}

async function del(req, res, next) {
  const { id } = req.params;
  const userIndex = usersDb.findIndex(user => user.id === id);

  if (userIndex > -1) {
    usersDb.splice(userIndex, 1);
    res.send({ body: `User ${id} has been removed.`});
  } else {
    res.send({ error: `User ${id} is not found.`});
  }

  await next;
}

module.exports = {
  list,
  get,
  create,
  update,
  del
};
