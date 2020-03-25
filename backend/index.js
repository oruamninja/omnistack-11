// arquivo principal da aplicação. todo o projeto vai partir desse arquivo.

const express = require('express');

const app = express();

// especificar que as requisicoes, os dados seram em json
app.use(express.json());

/**
 * Rota : http://localhost:3333/users
 * Recurso : /users
 */

 /**
  * Métodos HTTP
  * GET : Buscar uma informação do back-end
  * POST : Criar uma informação no back-end
  * PUT : Alterar uma informação no back-end
  * DELETE : Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros
   *  Query Paramns : Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação) Ex: http://localhost:3333/users?nome=maurocesar.
   *  Route Paramns : Parâmetros utilizados para identificar recursos Ex: http://localhost:3333/users/:id
   *  Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * Driver : Select * From users
    * Query Builder : table('users').select(*).where() -- npm install knex
    */

// criando primeira rota
app.post('/users', (request, response) => {
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

app.listen(3333);