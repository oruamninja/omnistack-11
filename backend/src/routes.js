const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post( '/sessions', SessionController.create );

// listar ongs
routes.get( '/ongs', OngController.index );
// rota para criar uma ong
routes.post( '/ongs', OngController.create );

routes.get( '/profile', ProfileController.index );

// rota para listar casos
routes.get( '/incidents', IncidentController.index );
// rota para criar uma caso
routes.post( '/incidents', IncidentController.create );
// rota para deletar caso
routes.delete( '/incidents/:id', IncidentController.delete );

module.exports = routes;