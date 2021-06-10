const Agenda = require('../models').Agenda;
const Professor = require('../models').Professor;
const Aluno = require('../models').Aluno;
const Materia = require('../models').Materia;
const config = require('../models').Config;

exports.listAll = (req, res) => {
    Agenda.findAll()
    .then(Agenda => res.send(Agenda))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const { id,idAluno,idProfessor,descricao,titulo,dataAula } = req.body;
    
    config.findAll({where: {id: 1}})
    .then(config =>{
        var preAgenda = config[0].dataValues.preAgenda;
        var  ultimoIdAgenda = config[0].dataValues.ultimoIdAgenda;
        var ultimoIdAgenda = ultimoIdAgenda + 1;
        var id = `${preAgenda}-${ultimoIdAgenda}`;
   
        updateIdAluno(ultimoIdAgenda);

        })
    
    Agenda.create({ id,idAluno,idProfessor,descricao,titulo,dataAula })
    .then(Agenda => res.send(Agenda))
    .catch(err => res.send(err))
}
exports.listOne = (req, res) => {
	Agenda.findAll(
        {
            where: {id:req.params.id},
            include: [
             {model: Agenda},
             {model: Aluno},
             {model: Professor}
            ]

})
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