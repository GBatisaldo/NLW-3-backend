import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);








//query builder ou ORM -- troca de um banco de dados para outro sem mexer na aplicação, podendo trocar para mariaDB, mariaDB, Mongo e etc.

// driver nativo, query builder, ORM(objective relational mapping)

// REQ / RES
//localhost:3333 


// Rota = conjunto
// Recurso = usuário

// métodos HTTP = GET, POST, PUT, DELETE
// Parametros

// GET = Buscar uma informaçao (lista, itens)
// POST = Criando uma informação
// PUT = editando uma informação
// DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?search=gusta&batisaldo
// Route Params: http://localhost:3333/users/1 (identificar um recurso) -- usuario de id 1
// Body: http://localhost:3333/users () 