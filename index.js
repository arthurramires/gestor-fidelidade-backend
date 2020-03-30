const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

//Definindo porta para rodar o servidor
app.listen(process.env.PORT || 3333);