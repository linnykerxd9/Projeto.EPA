const Aula = require('../models').Aula;
exports.listAll = (req, res) => {
    Aula.findAll()
    .then(Aula => res.send(Aula))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const { id,horario,duracao,data,idMateria,idProfessor,idAluno } = req.body;
    Aula.create({ id,horario,duracao,data,idMateria,idProfessor,idAluno })
    .then(Aula => res.send(Aula))
    .catch(err => res.send(err))
}