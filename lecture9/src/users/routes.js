const { Router } = require('express');

const actions = require('./actions');

const { list, get, create, update, del } = actions;
const usersRouter = Router();

usersRouter.get('/users', list);
usersRouter.get('/users/:id', get);
usersRouter.post('/users', create);
usersRouter.put('/users/:id', update);
usersRouter.delete('/users/:id', del);

module.exports = usersRouter;
