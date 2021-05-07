const Localizacoes = require('../models').Localizacoes;
exports.listAll = (req, res) => {
    Localizacoes.findAll()
    .then(localizacoes => res.send(localizacoes))
    .catch(err => res.send(err))
}
exports.createOne = (req, res) => {
    const { id,longitude,latitude,situacao,idProfessor } = req.body;
    Localizacoes.create({  id,longitude,latitude,situacao,idProfessor })
    .then(localizacoes => res.send(localizacoes))
    .catch(err => res.send(err))
}