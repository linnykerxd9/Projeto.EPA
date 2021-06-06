const materiaProf = require('../models').materiaProf;
const Professor = require('../models').Professor;
const Materia = require('../models').Materia;

exports.listAll = (req, res) => {
    materiaProf.findAll()
    .then(materiaProf => res.send(materiaProf))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const { id,idMateria,idProfessor } = req.body;
    materiaProf.create({  id,idMateria,idProfessor })
    .then(materiaProf => res.send(materiaProf))
    .catch(err => res.send(err))
}

exports.listOne = (req, res) => {
   materiaProf.findAll(
       {
           where: { idProfessor: req.params.id },
           include: [
            { model: Professor },
            {model:Materia}
           ]
       })
   .then(materiaProf => res.send(materiaProf))
   .catch(err => res.send(err))
}

