// arquivo principal da aplicação. todo o projeto vai partir desse arquivo.

const express = require('express');

const app = express();

// criando primeira rota
app.get('/', (request, response) => {
    response.send('Hello World !!!');
});

app.listen(3333);