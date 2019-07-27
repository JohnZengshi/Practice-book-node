'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/user/list', controller.user.list);
  router.get('/user/find', controller.user.find);

  router.post('/table/modifyInformation', controller.table.modifyInformation);

  router.post('/table/newInformation', controller.table.newInformation);

  router.post('/login', controller.user.userRegistration);
};
