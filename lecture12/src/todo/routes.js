const { Router } = require('express');
const actions = require('./actions');

const todoRouter = Router();
const { list, get, create, update, del } = actions;

todoRouter.get('/', list);
todoRouter.get('/:todoId', get);
todoRouter.post('/', create);
todoRouter.put('/:todoId', update); // localhost:3000/todo/:todoId
todoRouter.delete('/:todoId', del);

module.exports = todoRouter;
