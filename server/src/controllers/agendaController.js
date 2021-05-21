const Agenda = require('../models').Agenda;
const Professor = require('../models').Professor;
const Aluno = require('../models').Aluno;
const Materia = require('../models').Materia;

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
exports.listOne = (req, res) => {
	Agenda.findAll({where: {id:req.params.id}})
	.then(Agenda => res.send(Agenda))
	.catch(err => res.send(err))
}

exports.updateOne = (req, res) => {
    const { descricao, titulo, dataAula} = req.body
    Agenda.update({descricao, titulo, dataAula}, 
    {where: {id:req.params.id}})
    .then(Agenda => res.send(Agenda))
    .then(Agenda => res.send(Agenda))
}