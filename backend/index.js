// arquivo principal da aplicação. todo o projeto vai partir desse arquivo.

const express = require('express');

const app = express();

// criando primeira rota
app.get('/', (request, response) => {
    response.json({
        evento: 'Semana OmniStack-11.0',
        aluno: 'Mauro Cesar'
    });
});

app.listen(3333);