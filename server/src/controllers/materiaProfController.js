const materiaProf = require('../models').materiaProf;
const Professor = require('../models').Aluno

exports.listAll = (req, res) => {
    materiaProf.findAll()
    .then(materiaProf => res.send(materiaProf))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const { id,idMateria,idProfessor } = req.body;
    
    config.findAll({where:{id:1}})
.then(config => {

        var preMateriaProf = config[0].dataValues.preMateriaProf;
        var  ultimoIdMateriaProf = config[0].dataValues.ultimoIdMateriaProf;
        var ultimoIdMateriaProf = ultimoIdMateriaProf + 1;
        var id = `${preMateriaProf}-${ultimoIdMateriaProf}`;

        updateIdAula(ultimoIdAula);

    materiaProf.create({  id,idMateria,idProfessor })
    .then(materiaProf => res.send(materiaProf))
    .catch(err => res.send(err))
})
.catch(err => res.send(err))
}

exports.listOne = (req, res) => {
   MateriaProf.findAll(
        {
            where: {id:req.params.id},
            include: [
             {model: Professor},
             {model: Materia},
             {model: materiaProf}
            ]

})
   .then(materiaProf => res.send(materiaProf))
   .catch(err => res.send(err))
}
updateIdMateriaProf = (idAvaliacao) => {
     config.update({ultimoIdMateriaProf: idMateriaProf},{where:{id:1}})
}

