const Aula = require('../models').Aula;
const Professor = require('../models').Professor;
const Aluno = require('../models').Aluno;
const Materia = require('../models').Materia;
const config = require('../models').Config;

exports.listAll = (req, res) => {
    Aula.findAll()
    .then(Aula => res.send(Aula))
    .catch(erro => { console.log(erro);
    res.send(erro)})
}
exports.createOne = (req, res) => {
    const { id,horario,duracao,data,idMateria,idProfessor,idAluno } = req.body;

config.findAll({where:{id:1}})
.then(config => {

        var preAula = config[0].dataValues.preAula;
        var  ultimoIdAula = config[0].dataValues.ultimoIdAula;
        var ultimoIdAula = ultimoIdAula + 1;
        var id = `${preAula}-${ultimoIdAula}`;

        updateIdAula(ultimoIdAula);



Aula.create({ id,horario,duracao,data,idMateria,idProfessor,idAluno })
    .then(Aula => res.send(Aula))
    .catch(err => res.send(err))
})
.catch(err => res.send(err))
}



exports.listOne = (req, res) => {
	Aula.findAll(
        {
            where: {id:req.params.id},
            include: [
             {model: Materia},
             {model: Aula},
             {model: Aluno},
             {model: Professor}
            ]

})

	.then(Aula => res.send(Aula))
	.catch(err => res.send(err))
}
updateIdAula = (idAula) => {
     config.update({ultimoIdAula: idAula},{where:{id:1}})
}