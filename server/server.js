const express = require('express');
const bodyParser = require('body-parser');
const alunoRoute = require('./src/routes/alunoRoute');
const aulaRoute = require('./src/routes/aulaRoute');
const avaliacaoRoute = require('./src/routes/avaliacaoRoute');
const padraoRoute = require('./src/routes/padraoRoute')
const doacaoRoute = require('./src/routes/doacaoRoute');
const agendaRoute = require('./src/routes/agendaRoute');
const localizacaoRoute = require('./src/routes/localizacaoRoute');
const materiaRoute = require('./src/routes/materiaRoute');
const pagamentoRoute = require('./src/routes/pagamentoRoute');
const professorRoute = require('./src/routes/professorRoute');
const statusRoute = require('./src/routes/statusRoute');
const materiaProf = require('./src/routes/materiaProfRoute');
const pedidoDoacao = require('./src/routes/pedidoDoacaoRoute');
const config = require('./src/routes/ConfigRoute');
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json());


alunoRoute(app);
aulaRoute(app);
avaliacaoRoute(app);
doacaoRoute(app);
agendaRoute(app);
localizacaoRoute(app);
materiaRoute(app);
pagamentoRoute(app);
professorRoute(app);
statusRoute(app);
padraoRoute(app);
materiaProf(app);
pedidoDoacao(app);
config(app);

const port =process.env.PORT || 3000;

app.listen(port);

console.log(`Servidor rodando na porta: ${port}`)