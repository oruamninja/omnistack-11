const express = require('express');

const routes = express.Router();

// criando primeira rota
routes.post('/users', (request, response) => {
    const queryParamns = request.query;
    const routeParamns = request.params;
    const body = request.body;
    console.log('Query paramns: ', queryParamns);
    console.log('Route paramns: ', routeParamns);
    console.log('Body: ', body);
    response.json({
        evento: 'Semana OmniStack-11.0',
        aluno: 'Mauro Cesar'
    });
});

module.exports = routes;