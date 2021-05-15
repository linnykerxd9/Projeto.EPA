const Aula = require('../models').Aula;
const Professor = require('../models').Professor;
const Aluno = require('../models').Aluno;
const Materia = require('../models').Materia;

exports.listAll = (req, res) => {
    Aula.findAll()
    .then(Aula => res.send(Aula))
    .catch(erro => { console.log(erro);
    res.send(erro)})
}
exports.createOne = (req, res) => {
    const { id,horario,duracao,data,idMateria,idProfessor,idAluno } = req.body;
    Aula.create({ id,horario,duracao,data,idMateria,idProfessor,idAluno })
    .then(Aula => res.send(Aula))
    .catch(err => res.send(err))
}

exports.listOne = (req, res) => {
	Aula.findAll({where: {id:req.params.id}})
	.then(Aula => res.send(Aula))
	.catch(err => res.send(err))
}