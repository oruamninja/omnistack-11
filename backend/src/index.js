// arquivo principal da aplicação. todo o projeto vai partir desse arquivo.

const express = require('express');

const routes = require('./routes') // importa as rotas do arquivo separado.

const app = express();

// especificar que as requisicoes, os dados seram em json
app.use(express.json());

app.use(routes) // usa as rotas no aplicativo.

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

app.listen(3333);