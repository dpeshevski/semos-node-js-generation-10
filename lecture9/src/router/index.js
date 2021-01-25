const { Router } = require('express');

const usersRoutes = require('../users/routes');
// const clientsRoutes = require('../clients/routes');

const indexRouter = Router();

indexRouter.use(usersRoutes);
// indexRouter.use(clientsRoutes);

module.exports = indexRouter;
