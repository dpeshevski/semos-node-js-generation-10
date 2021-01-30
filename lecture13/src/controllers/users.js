const { models } = require('../models/index');

async function list(_, res, next) {
  const users = await models.User.find({});

  res.json(users);
  await next;
}

async function get(req, res, next) {
  const { id } = req.params;
  const user = await models.User.findById({ _id: id });

  res.json(user);
  await next;
}

async function create(req, res, next) {
  const {
    name,
    email,
    phone,
    username
  } = req.body;

  await models.User.create({ name, email, phone, username, createdAt: new Date() });

  res.send('Created.');
  await next;
}

async function update(req, res, next) {
  const { id } = req.params;
  const {
    name,
    email,
    phone,
    username
  } = req.body;

  await models.User.updateOne({ _id: id }, { name, email, phone, username, updatedAt: new Date() });

  res.send('Updated.');
  await next;
}

async function del(req, res, next) {
  const { id } = req.params;

  await models.User.deleteOne({ _id: id });

  res.send('Deleted.');
  await next;
}

module.exports = {
  list,
  get,
  create,
  update,
  del
};
