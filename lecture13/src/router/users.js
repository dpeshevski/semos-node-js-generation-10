const { Router } = require('express');

const UserController = require('../controllers/users');

const userRouter = Router();
const { list, get, create, update, del } = UserController;

userRouter.get('/', list);
userRouter.get('/:id', get);
userRouter.post('/', create);
userRouter.put('/:id', update);
userRouter.delete('/:id', del);

module.exports = userRouter;
