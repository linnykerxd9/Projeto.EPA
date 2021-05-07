const Agenda = require('../models').Agenda;
exports.listAll = (req, res) => {
    Agenda.findAll()
    .then(Agenda => res.send(Agenda))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const { id,idAluno,idProfessor,descricao,titulo,dataAula } = req.body;
    Agenda.create({ id,idAluno,idProfessor,descricao,titulo,dataAula })
    .then(Agenda => res.send(Agenda))
    .catch(err => res.send(err))
}