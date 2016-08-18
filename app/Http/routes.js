'use strict';

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');

Route.any('/', function * (request, response) {
  response.json({
    jsonapi: {
      version: '1.0',
    },
    data: {
    },
    meta: {
      uptime: process.uptime(),
    },
  });
});

const User = use('App/Model/User');
Route.get('/users', function * (request, response) {
  const users = yield User.all();

  response.json(users.toJSON());
});
