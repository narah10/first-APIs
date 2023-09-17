const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.jasonRoute);

routes.get('/Emma', lesson1Controller.emmaRoute);

module.exports = routes; 