const express = require('express');

const routes = express.Router();

const crypto = require('crypto');

const connection = require('./database/connection');


// listar ongs
routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
});

// rota para criar uma ong
routes.post('/ongs', async (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body;

    // como o id da ong sera criado um id aleatorio, sera usado o crypto
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    })

    response.json({ id });
});

module.exports = routes;