const express = require('express');
const bodyParser = require('body-parser');
const agendamentoRoute = require('./src/routes/agendamentoRoute');
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


const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json());

agendamentoRoute(app);
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

const port =process.env.PORT || 3000;

app.listen(port);

console.log(`Servidor rodando na porta: ${port}`)