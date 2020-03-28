const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket'); 

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-davyy.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// TIPOS DE PARÂMETROS
// Query Params: request.query (Filtros, Ordenaçao, Paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou na remoção)
// Body: requrest.body (Dados para criação ou alteração de um registro)

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);