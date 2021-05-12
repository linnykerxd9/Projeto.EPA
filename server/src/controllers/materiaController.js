const Materia = require('../models').Materia;

exports.listAll = (req, res) => {
    Materia.findAll()
    .then(materia => res.send(materia))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const { id,nome,valorMateria,escolaridade } = req.body;
    Materia.create({  id,nome,valorMateria,escolaridade })
    .then(materia => res.send(materia))
    .catch(err => res.send(err))
}